const path = require("path");
module.exports = {
  experiments: {
    outputModule: true,
  },
  entry: {
    index: "./src/index.ts",
  },
  output: {
    filename: "[name].bundler.js",
    path: path.resolve(__dirname, "./dist"),
    library: {
      type: "module",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              configFile: "ts-loader.tsconfig.json", // because ts-loader is not supported allowImportingTsExtensions
            },
          },
        ],
        exclude: /node_modules/i,
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "@emotion/react": "@emotion/react",
    "@emotion/styled": "@emotion/styled",
    "@mui/material": "@mui/material",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
