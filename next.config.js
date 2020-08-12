module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // config.resolve.mainFields = config.mainFields || [];
    // config.resolve.mainFields.push("browser");
    // config.externals = config.externals || [];
    // config.externals.push("browser");
    // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    config.resolve.alias.https = "https-browserify";
    config.resolve.alias.http = "http-browserify";

    // Important: return the modified config
    return config;
  },
};
