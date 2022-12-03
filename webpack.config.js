const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    weatherController:  './src/controller/weather-controller.js',
    index:              './src/index.js',
    temperature:        './src/modules/temperature.js',
    weather:            './src/modules/weather.js',
    wind:               './src/modules/wind.js',
    zone:               './src/modules/zone.js',
    buttonManager:      './src/utilities/button-manager.js',
    inputManager:       './src/utilities/input-manager.js',
    domManager:         './src/utilities/dom-manager.js',
    mathHelper:         './src/utilities/math-helper.js',
    uiController:       './src/view/ui-controller.js',
    uiWeatherCtlr:      './src/view/ui-weather-controller.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Weather Zone',
      template: './src/index.html',
      favicon: './src/assets/icon/site.ico',
      inject: 'body',
      cache: false,
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'src/assets'),
      Controller: path.resolve(__dirname, 'src/controller'),
      Data: path.resolve(__dirname, 'src/assets/data'),
      Fonts: path.resolve(__dirname, 'src/assets/fonts'),
      Icon: path.resolve(__dirname, 'src/assets/icon'),
      Images: path.resolve(__dirname, 'src/assets/images'),
      Modules: path.resolve(__dirname, 'src/modules'),
      Style: path.resolve(__dirname, 'src/style'),
      Svg: path.resolve(__dirname, 'src/assets/images/svg'),
      Utilities: path.resolve(__dirname, 'src/utilities'),
      View: path.resolve(__dirname, 'src/view'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            // Creates `style` nodes from JS strings
            loader: 'style-loader',
          },
          {
            // Translates CSS into CommonJS
            loader: 'css-loader',
          }
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/i,
        type: 'asset/resource',
        // Use 'generator' to output unique name (based on webpack pattern e.g. [name], [ext], etc.)
        generator: {
          filename: "[name][ext][query]",
          outputPath: "images/",
          publicPath: "images/",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "[name][ext][query]",
          outputPath: "fonts/",
          publicPath: "fonts/",
        },
      }
    ],
  },
};