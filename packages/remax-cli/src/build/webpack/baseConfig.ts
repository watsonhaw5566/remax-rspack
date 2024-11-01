import * as path from 'path';
import { DefinePlugin } from 'webpack';
import Config from 'webpack-5-chain';
import alias from '../utils/alias';
import getEnvironment from '../utils/env';
import * as webpack from 'webpack';
import Builder from '../Builder';

export default function baseConfig(config: Config, builder: Builder) {
  config.resolveLoader.modules
    .merge(['node_modules', path.join(__dirname, './loaders')])
    .end()
    .extensions.merge(['.js', '.ts']);

  config.mode(process.env.NODE_ENV === 'production' ? 'production' : 'development');

  config.context(builder.options.cwd);

  config.resolve.alias.merge(alias(builder.options, builder.target));

  config.output.path(path.join(builder.options.cwd, builder.options.output));

  const env = getEnvironment(builder.options, builder.target);
  config.plugin('webpack-define-plugin').use(DefinePlugin, [env.stringified]);
  config.plugin('provide-regeneratorRuntime').use(webpack.ProvidePlugin, [
    {
      regeneratorRuntime: 'regenerator-runtime',
    },
  ]);

  if (process.env.NODE_ENV === 'production') {
    config.clear();
  }

  config.devServer
    .publicPath(config.get('publicPath'))
    .compress(true)
    .hot(true)
    .open(false)
    .historyApiFallback(true)
    .noInfo(true);

  return config;
}
