const path = require("path");

module.exports = (env = {}) => ({
  mode: env.production ? "production" : "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".html"],
    modules: ["node_modules", path.resolve(__dirname, "src")],
  },
  // eslint-disable-next-line compat/compat
  entry: "./src/index.ts",
  devtool: "source-map",
  externals: {
    react: "react",
  },
  output: {
    library: {
      type: env.commonjs ? "commonjs" : "module",
    },
    module: true,
    filename: `[name].js`,
    path: path.resolve(__dirname, "dist"),
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
});
