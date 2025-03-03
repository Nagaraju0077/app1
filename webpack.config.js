const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  devServer: {
    port: 3006,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app1",
      filename: "remoteEntry.js",
      exposes: {
        "./App1": "./src/App1.js"
      },
      remotes:{
        host:"host@http://localhost:3009/remoteEntry.js",
      },
      shared:{
        react:{
            singleton:true,
            requiredVersion:"auto",
        },
         "react-dom":{
            singleton:true,
            requiredVersion:"auto",
        },
        "jwt-decode":{
            singleton:true,
            requiredVersion:"auto",
        },
        


      },
      shared: ["react", "react-dom", "jwt-decode"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
