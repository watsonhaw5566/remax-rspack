import type { Options } from '@remax/types';
import API from '../API';
import output from './utils/output';
import Builder from './Builder';
import webpackConfig from './webpack/config.miniComponent';
import { Configuration } from '@rspack/core';

export default class MiniPluginBuilder extends Builder {
  constructor(api: API, options: Options) {
    super(api, options, 'minicomponent');
  }

  createWebpackConfig(): Configuration {
    return webpackConfig(this);
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
    this.webpackCompiler.watch({}, (error, stats) => {
      if (error) {
        console.log(error);
        output.error(error.message);
        throw error;
      }

      const info = stats?.toJson();

      if (stats?.hasErrors()) {
        info?.errors?.forEach(error => {
          output.error(error.message);
        });
      }

      if (stats?.hasWarnings()) {
        console.warn(info?.warnings?.join('\n'));
      }
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
          console.warn(warning);
        });
      }
    });
  }
}
