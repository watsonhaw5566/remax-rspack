import * as path from 'path';
import type { Options, Platform } from '@remax/types';
import { slash } from '@remax/shared';

interface Alias {
  [key: string]: string;
}

const resolveReact = (options: Options): string => {
  let react: string;
  try {
    react = require.resolve(`${options.cwd}/node_modules/react/`);
  } catch (e) {
    react = require.resolve('react');
    console.warn(`Can't resolve react in ${options.cwd}!`);
  }
  return path.dirname(slash(react));
};

export default (options: Options, target: Platform) => {
  const config: Alias = {
    'regenerator-runtime': require.resolve('regenerator-runtime'),
    // 防止 link 开发时加载多个 React
    '@': path.resolve(options.cwd, options.rootDir),
    react: resolveReact(options),
    'react-reconciler': 'react-reconciler/cjs/react-reconciler.production.min.js',
    '@remax/runtime': require.resolve('@remax/runtime'),
    '@remax/shared': require.resolve('@remax/shared'),
  };

  if (target !== 'web') {
    config['react-dom'] = '@remax/runtime';
  }

  return config;
};
