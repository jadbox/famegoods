module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    /*
    if (!isServer) {
      config.resolve.mainFields = config.resolve.mainFields || [];
      config.resolve.mainFields.push("browser");

      config.mainFields = config.mainFields || [];
      config.mainFields.push("browser");
    }*/
    // config.externals = config.externals || [];
    // config.externals.push("browser");
    // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    if (isServer || dev) {
      config.resolve.alias.https = "https-browserify";
      config.resolve.alias.http = "http-browserify";
      config.resolve.alias.string_decoder = "string_decoder";
    }

    // Important: return the modified config
    return config;
  },
};
