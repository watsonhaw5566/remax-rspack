# 开发步骤

1 安装开发依赖

`pnpm install`

2 运行 package.json 内的 build命令  构建需要的 cjs/esm 包

`pnpm build`

3 启动 watch

`pnpm watch`

4 yarn link remax/cli 构件库

`yarn link`

5、进入 demo 目录，yarn 安装依赖

6、demo node_modules link 到 本地的 @remax/cli

`yarn link @remax/cli`

7、启动 demo package.json watch 即可打包开发

`yarn watch @remax/cli`

（引用的原生小程序会放在 dist 目录下的 _npm 文件夹内，当前只有 button 一个， 但 button 组件内部是引用 loading / icon 组件依赖的 ）

8、打开微信小程序开发工具，选择 demo 目录，即可预览

问题:
- 目前遇到的问题是无法找打原生小程序组件的依赖库的文件。只能打包到引用的级别。

Bug:
一个 bug 是 rspack-plugin-virtual-module 插件的。 当入口文件是 virtual-module 的时，使用 optimization.splitChunks 会无效，关了 optimization.splitChunks 则可正常运行（但是增大了起始的包大小）。不知是否是现在的 rspack-plugin-virtual-module 插件是直接 emit 写入文件的缘故。



module.dependencies 的依赖文件有两个，分别是

 - getUsingComponents.ts (getComponents 方法)
 - modules.ts (getModule 方法)

getUsingComponents 文件的路径如下
`packages/remax-cli/src/build/webpack/plugins/getUsingComponents.js`

modules.ts 文件的路径如下
`packages/remax-cli/src/build/utils/modules.ts`
