import { Compiler, sources, Compilation, javascript } from 'webpack';

const { ConcatSource } = sources;

const PLUGIN_NAME = 'RemaxCoverageIgnorePlugin';

/**
 * 伙伴会为每个小程序构建一个覆盖率包来统计测试覆盖率。
 * 由于我们把 node_modules 的依赖跟业务代码打包到一起了，导致测试覆盖率计算误差很大，
 * 所以为所有 node_modules 下的模块都加上忽略覆盖率的注释
 */
class CoverageIgnorePlugin {
  apply(compiler: Compiler): void {
    compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation: Compilation) => {
      javascript.JavascriptModulesPlugin.getCompilationHooks(compilation).renderModuleContainer.tap(
        {
          name: PLUGIN_NAME,
          stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
        },
        (moduleSource, module: any) => {
          if (/node_modules/.test(module.resource)) {
            const source = new ConcatSource();
            source.add('/* istanbul ignore next */\n');
            source.add(moduleSource);
            return source;
          }
          return moduleSource;
        }
      );
    });
  }
}

export default CoverageIgnorePlugin;
