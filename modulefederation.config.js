const deps = require("./package.json").dependencies;

module.exports = {
  name: "host",
  filename: "remoteEntry.js",
  remotes: {
    remote: "remote@http://localhost:3001/remoteEntry.js",
  },
  exposes: {},
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
