const path = require("path");
const copyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    background: path.join(__dirname, "src/background/index.ts"),
    // popup: path.join(__dirname, "src/popup/index.tsx"),
    // eventPage: path.join(__dirname, "src/eventPage.ts")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      //   {
      //     exclude: /node_modules/,
      //     test: /\.scss$/,
      //     use: [
      //       {
      //         loader: "style-loader" // Creates style nodes from JS strings
      //       },
      //       {
      //         loader: "css-loader" // Translates CSS into CommonJS
      //       },
      //       {
      //         loader: "sass-loader" // Compiles Sass to CSS
      //       }
      //     ]
      //   }
    ],
  },
  plugins: [
    new copyPlugin({
      patterns: [
        {
          from: path.join(__dirname, "src/manifest.json"),
          to: path.join(__dirname, "dist"),
          force: true,
        },
        {
          from: path.join(__dirname, "src/static/icons/clip_16.png"),
          to: path.join(__dirname, "dist"),
          force: true,
        },
        {
          from: path.join(__dirname, "src/static/icons/clip_48.png"),
          to: path.join(__dirname, "dist"),
          force: true,
        },
        {
          from: path.join(__dirname, "src/static/icons/clip_128.png"),
          to: path.join(__dirname, "dist"),
          force: true,
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
