import webpack from 'webpack';
import EntryCollection from './EntryCollection';
import ProjectPath from './ProjectPath';
import readManifest from '../readManifest';
import API from '../API';
import { AppConfig, BuildType, MiniPluginConfig, Options, Platform } from '@remax/types';

abstract class Builder {
  api: API;
  options: Options;
  target: Platform;
  projectPath: ProjectPath;
  projectConfig: AppConfig | MiniPluginConfig;
  projectThemeConfig: any;
  entryCollection: EntryCollection;
  webpackCompiler: webpack.Compiler;
  buildType: BuildType;
  webpackConfig: any;

  protected constructor(api: API, options: Options, buildType: BuildType) {
    this.api = api;
    this.options = options;
    this.target = options.target!;
    this.buildType = buildType;

    if (this.target !== 'web') {
      api.registerAdapterPlugins(this.target);
    }

    this.projectPath = new ProjectPath(this);
    this.projectConfig = this.fetchProjectConfig();
    this.projectThemeConfig = this.fetchProjectThemeConfig();
    this.entryCollection = new EntryCollection(this);
    this.entryCollection.init();
    this.webpackConfig = this.createWebpackConfig();
    this.webpackCompiler = this.createWebpackCompiler();
  }

  abstract run(): webpack.Compiler;

  abstract build(): void;

  abstract watch(): void;

  abstract createWebpackConfig(): webpack.Configuration;

  fetchProjectConfig() {
    const configFile =
      this.buildType === 'miniplugin' ? this.projectPath.pluginConfigFile() : this.projectPath.appConfigFile();
    const config = readManifest(configFile, this.target, false);
    const finalConfig = ['miniapp', 'webapp'].includes(this.buildType) ? this.api.onAppConfig(config) : config;

    if (this.buildType === 'miniapp') {
      if (!finalConfig.pages || finalConfig.pages.length === 0) {
        throw new Error('app.config.js|ts 并未配置页面参数');
      }
    }

    this.projectConfig = finalConfig;
    return this.projectConfig;
  }

  fetchProjectThemeConfig() {
    const configFile =
      this.buildType === 'miniplugin' ? this.projectPath.pluginConfigFile() : this.projectPath.themeConfigFile();
    const config = readManifest(configFile, this.target, false);
    const finalConfig = ['miniapp'].includes(this.buildType) ? this.api.onThemeConfig(config) : config;
    this.projectThemeConfig = finalConfig;
    return this.projectThemeConfig;
  }

  createWebpackCompiler(): webpack.Compiler {
    const cfg = this.webpackConfig;

    const index = cfg.plugins.findIndex((e: any) => e.constructor.name === 'MiniCssExtractPlugin');
    const cssPlugin = cfg.plugins[index];

    if (cssPlugin) {
      cfg.plugins[index] = cssPlugin;
    }

    return webpack(cfg);
  }
}

export default Builder;
