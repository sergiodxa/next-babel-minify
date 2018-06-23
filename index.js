const BabelMinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = (babelMinifyOptions = {}) => (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          "This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade"
        );
      }

      config.plugins = config.plugins.filter(plugin => {
        return plugin.constructor.name !== "UglifyJsPlugin";
      });

      if (!options.dev) {
        config.plugins.push(new BabelMinifyPlugin(babelMinifyOptions));
      }

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    }
  });
};
