import { Configuration } from '@rspack/core';
import detect from 'detect-port';
import type { Options } from '@remax/types';
import webpackConfig from './webpack/config.web';
import mpaWebpackConfig from './webpack/config.web.mpa';
import address from 'address';
import output from './utils/output';
import API from '../API';
import watch from './watch';
import Builder from './Builder';
import { RspackDevServer } from '@rspack/dev-server';

export default class WebBuilder extends Builder {
  constructor(api: API, options: Options) {
    super(api, options, 'webapp');
  }

  createWebpackConfig(): Configuration {
    return this.options.web?.mpa ? mpaWebpackConfig(this) : webpackConfig(this);
  }

  run() {
    if (this.options.watch) {
      this.watch();
    } else {
      this.build();
    }
    return this.webpackCompiler;
  }

  watch() {
    const designatedPort = this.options.port ?? 3000;

    detect(designatedPort, (err, port) => {
      if (err) {
        output.error(err.message);

        process.exit(1);
      }

      if (designatedPort !== port) {
        output.warn(` 端口: ${designatedPort} 被占用，系统已分配另一个可用端口：${port}`);
      }

      output.message('🚀 启动 watch', 'blue');
      output.message(`📎 http://localhost:${port}`, 'blue');
      output.message(`📎 http://${address.ip()}:${port}\n`, 'blue');

      const server = new RspackDevServer(this.webpackConfig.devServer!, this.webpackCompiler);

      this.webpackCompiler.hooks.done.tap('web-dev', stats => {
        console.log(
          stats.toString({
            colors: true,
            modules: false,
            children: false,
            assets: false,
            entrypoints: false,
          })
        );
      });
      server.server.listen(port);
      watch(this, server);
    });
  }

  build() {
    this.webpackCompiler.run((error, stats) => {
      if (error) {
        output.error(error.message);
        throw error;
      }

      const info = stats?.toJson();

      if (stats?.hasErrors()) {
        info?.errors?.forEach(error => {
          output.error(error.message);
        });

        process.exit(1);
      }

      if (stats?.hasWarnings()) {
        info?.warnings?.forEach(warning => {
          output.warn(warning.message);
        });
      }
    });
  }
}
