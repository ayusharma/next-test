const { StatsWriterPlugin } = require("webpack-stats-plugin");
const { RelativeCiAgentWebpackPlugin } = require("@relative-ci/agent");

module.exports = {
  reactStrictMode: true,
  webpack: function (config, options) {
    const { dev, isServer } = options;

    if (!dev && !isServer) {
      config.plugins.push(
        new RelativeCiAgentWebpackPlugin({
          stats: { excludeAssets: [/stats.json/] },
        })
      );
    }
    console.log("config", config);
    config.plugins.push(
      new StatsWriterPlugin({
        filename: "stats.json",
        stats: {
          context: "./", // optional, will improve readability of the paths
          assets: true,
          entrypoints: true,
          chunks: true,
          modules: true,
        },
      })
    );

    return config;
  },
};
