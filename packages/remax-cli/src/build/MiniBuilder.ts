import BaseBuilder from './Builder';
import output from './utils/output';
import watch from './watch';
import type { Options } from '@remax/types';
import API from '../API';
import webpackConfig from './webpack/config.mini';
import { Configuration } from '@rspack/core';

export default class MiniBuilder extends BaseBuilder {
  constructor(api: API, options: Options) {
    super(api, options, 'miniapp');
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
        info?.warnings?.forEach(warn => {
          console.warn(warn.message);
        });
      }
    });
  }

  watch() {
    const watcher = this.webpackCompiler.watch({}, (error, stats) => {
      if (error) {
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
        info?.warnings?.forEach(warn => {
          console.warn(warn.message);
        });
      }

      // 适配阿里小程序 IDE
      if (this.options.target === 'ali') {
        output.message('Watching for changes...', 'green', this.options.notify);
      }
    });
    watch(this, watcher, true);
    return watcher;
  }
}
