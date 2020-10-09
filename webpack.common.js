const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const package = require("./package.json");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    // vendor: Object.keys(package.dependencies),
    // vendor: "./src/home/js/vendor.js",
    index: "./src/home/js/index.js",

    project: "./src/project/js/project.js",
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
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: { extensions: [".js", ".ts"] },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: true,
      chunks: ["index"],
      template: path.resolve(__dirname, "src/home", "index.html"),
    }),
    new HtmlWebpackPlugin({
      filename: "project.html",
      inject: true,
      chunks: ["project"],
      template: path.resolve(__dirname, "src/project", "project.html"),
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: "src/img", to: "assets/img" },
        { from: "src/fonts", to: "assets/fonts" },
      ],
    }),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
};
