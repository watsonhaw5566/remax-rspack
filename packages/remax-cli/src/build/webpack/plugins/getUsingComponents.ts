// import * as path from 'path';
import Store from '@remax/build-store';
import { slash } from '@remax/shared';
// import { getNativeAssetOutputPath } from '../../utils/paths';
import { Compilation, Module } from '@rspack/core';
import { Options } from '@remax/types';

interface Component {
  id: string;
  path: string;
  props: string[];
}

function findModule(compilation: Compilation, file: string) {
  return Array.from(compilation.modules.values()).find(m => slash(m.resource!) === file) as Module;
}

// function compositionComponents(compilation: Compilation) {
//   const cc = new Map<string, Set<string>>();
//   Store.compositionComponents.forEach((components, file) => {
//     const module = findModule(compilation, file);
//     // module.dependencies.forEach((dep: any) => {
//     //   const component = components.get(dep.request);
//     //   const mod = compilation.moduleGraph.getModule(dep);
//     //   if (component && mod) {
//     //     const resource = slash(mod.resource);
//     //     const compositionComponent = cc.get(resource) || new Set<string>();
//     //     component.props.forEach(compositionComponent.add, compositionComponent);
//     //     cc.set(resource, compositionComponent);
//     //   }
//     // });
//   });
//   return cc;
// }

/**
 * 编译小程序自定义组件流程
 *
 * 1. 通过 @babel/plugin-remax-host-component 找出每个 module 中从外部 import 的 composition component，放入 Store.compositionComponents；
 * 2. 通过 webpack loader 找出所有小程序自定义组件，放入 Store.nativeComponent；
 * 3. 在 getUsingComponents 方法中通过 compilation.modules 递归遍历所有 page 的 dependencies；
 * 4. 通过 1、2 中的信息从 dependencies 中找出 page 依赖的小程序自定义组件。
 */
function getUsingComponents(
  page: string,
  compilation: Compilation,
  options: Options,
  prefixPath = ''
): Map<string, Component> {
  const components = new Map<string, Component>();
  const handledModules = new Set<string>();

  const getComponents = (module: Module) => {
    if (!module) {
      return;
    }
    const resource = slash(module.resource!);
    // 防止循环依赖
    if (resource) {
      if (handledModules.has(resource)) {
        return;
      }
      handledModules.add(resource);
    }

    const pluginComponents = Array.from(Store.pluginComponents.values()).filter(c => c.importers.has(resource));
    pluginComponents.forEach(pluginComponent => {
      components.set(pluginComponent.id, {
        id: pluginComponent.id,
        path: pluginComponent.componentPath,
        props: Array.from(pluginComponent.props.values()),
      });
    });

    // const pageIssuerName = page.replace(`${options.cwd}`, '.');
    //
    // const state = compilation.getStats().toJson({ dependentModules: true });
    //
    // const pageDepModules: StatsModule[] | undefined = state.modules?.filter(item => item.issuerName === pageIssuerName);
    // console.log(pageDepModules);

    // module.dependencies.forEach((dep: any) => {
    //   const mod = compilation.moduleGraph.getModule(dep);
    //   if (mod) {
    //     let depModule;
    //     if (mod.resource) {
    //       depModule = mod;
    //     } else if (mod.rootModule) {
    //       depModule = mod.rootModule;
    //     } else {
    //       return;
    //     }
    //     const depResource = slash(depModule.resource);
    //     const nativeComponent = Store.nativeComponents.get(depResource);
    //     if (nativeComponent) {
    //       const componentProps = compositionComponents(compilation).get(depResource);
    //       const componentPath = slash(path.join(prefixPath, getNativeAssetOutputPath(depResource, options)));
    //       const props = Array.from(componentProps ? componentProps.values() : []);
    //       components.set(nativeComponent.id, {
    //         id: nativeComponent.id,
    //         path: componentPath.replace(new RegExp(`\\${path.extname(componentPath)}$`), ''),
    //         props,
    //       });
    //     }
    //     getComponents(depModule);
    //   }
    // });
  };
  getComponents(findModule(compilation, page));
  return components;
}

export { getUsingComponents };
