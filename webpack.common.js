const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const package = require("./package.json");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
  target: "web",
  entry: {
    // vendor: Object.keys(package.dependencies),
    // vendor: "./src/home/js/vendor.js",
    shared: "./src/vendor.js",
    index: "./src/home/js/index.js",

    project: "./src/project/js/project.js",
  },
    output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
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
            loader: "file-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "assets/img/[hash]-[name].[ext]",
            },
          },
        ],
      },
      {
         test: /\.(eot|woff|woff2|ttf|otf)(\?\S*)?$/,
         use: [{
                loader: 'file-loader',

                   options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/fonts/',

                    }
                }]
            },
    ],
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         name: 'commons',
  //         chunks: 'initial',
  //         minChunks: 2
  //       }
  //     }
  //   }
  // },

  optimization: {
    splitChunks: {
      chunks: 'all',
       cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    },
     runtimeChunk: {
      name: 'runtime',
    },
  },
  resolve: { extensions: [".js", ".ts"] },
  plugins: [

    new HtmlWebpackPlugin({
      filename: "index.html", // output file
      inject: true,
      chunks: ["index"],
      template: path.resolve(__dirname, "src/home", "index.html"),// template file
    }),
    // new HtmlWebpackPlugin({
    //   filename: "project.html", // output file
    //   inject: true,
    //   chunks: ["project"],
    //   template: path.resolve(__dirname, "src/project", "project.html"),// template file
    // }),
    new HtmlWebpackPlugin({
      filename: "bl.html", // output file
      inject: true,
      chunks: ["project"],
      template: path.resolve(__dirname, "src/project", "bl.html"),// template file
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: "src/img", to: "assets/img" },
      ],
    }),
  ],
};
