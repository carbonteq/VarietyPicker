const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

const config = {
  entry: {
    styles: "./src/styles/main.css",
    app: "./src/index.tsx",
  },
  optimization: {
    runtimeChunk: "single",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].min.js",
  },
  resolve: {
    extensions: [".ts", ".js", ".json", ".jsx", ".tsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts?|tsx?)$/,
        loader: "ts-loader",
        options: { allowTsInNodeModules: true },
      },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        // Now we apply rule for images
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
      },
      {
        // Apply rule for fonts files
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        type: "asset/resource",
        dependency: { not: ["url"] },
      },
    ],
  },

  plugins: [
    new Dotenv(),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
    new htmlWebpackPlugin({
      title: "Prospecting Tool",
      template: "./public/index.html",
      chunks: ["app", "styles"],
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.devtool = "inline-source-map";
    config.mode = "development";
    config.devServer = {
      hot: true,
      historyApiFallback: true,
    };
  }

  if (argv.mode === "production") {
    config.mode = "production";
    config.optimization = {
      splitChunks: {
        chunks: "all",
      },
      minimize: true,
      minimizer: [new TerserPlugin({})],
    };
  }
  return config;
};
