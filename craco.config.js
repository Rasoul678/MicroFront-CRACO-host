const cracoModuleFederation = require("craco-module-federation");

module.exports = {
  output: {
    publicPath: "https://rasoul678.github.io/MicroFront-CRACO-host/",
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
};
