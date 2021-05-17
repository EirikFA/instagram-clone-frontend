const CracoAlias = require("craco-alias");

require("dotenv").config({
  path: ".env.local"
});

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json"
      }
    }
  ],
  devServer: {
    proxy: {
      [process.env.REACT_APP_BACKEND_URL]: {
        target: process.env.DEV_PROXY_TARGET,
        pathRewrite: {
          [`^${process.env.REACT_APP_BACKEND_URL}`]: ""
        }
      }
    }
  }
};
