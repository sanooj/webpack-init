const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html"
      // filename: "./index.html"
    })
  ]
});
