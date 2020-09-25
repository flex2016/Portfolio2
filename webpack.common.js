const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var package = require("./package.json");

module.exports = {
  entry: {
    index: "./src/home/js/index.js",
    vendor: Object.keys(package.dependencies),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: { extensions: [".js", ".ts"] },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: true,
      template: path.resolve(__dirname, "src/home", "index.html"),
    }),
    // new HtmlWebpackPlugin({
    //   filename: "project.html",
    //   inject: true,
    //   template: path.resolve(__dirname, "src", "project.html"),
    // }),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
};
