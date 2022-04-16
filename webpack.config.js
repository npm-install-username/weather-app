// Webpack uses this to work with directories
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin its work
  entry: './src/javascript/index.js',
  devtool: 'inline-source-map',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js',
    clean: true,
  },

  module: {
    rules: [
      // Babel loader was giving regeneratorRuntime is not defined? error
        // {
        //     test: /\.js$/,
        //     exclude: /(node_modules)/,
        //     use: {
        //         loader: 'babel-loader',
        //         options: {
        //             presets: ['@babel/preset-env']
        //         }
        //     }
        // },
        {
            // Apply rule for .sass, .scss or .css files
            test: /\.(sa|sc|c)ss$/,
      
            // Set loaders to transform files.
            // Loaders are applying from right to left(!)
            // The first loader will be applied after others
            use: [
                    {
                    // After all CSS loaders, we use a plugin to do its work.
                    // It gets all transformed CSS and extracts it into separate
                    // single bundled file
                    loader: MiniCssExtractPlugin.loader
                    },
                   {
                     // This loader resolves url() and @imports inside CSS
                     loader: "css-loader",
                   },
                   {
                     // Then we apply postCSS fixes like autoprefixer and minifying
                     loader: "postcss-loader"
                   },
                   {
                     // First we transform SASS to standard CSS
                     loader: "sass-loader",
                     options: {
                       implementation: require("sass")
                     }
                   }
                 ]
                 
          },
          {
            // Apply rule for fonts files
            test: /\.(woff|woff2|ttf|otf|eot)$/,
            use: [
                   {
                     // Using file-loader too
                     loader: "file-loader",
                     options: {
                       outputPath: 'fonts'
                     }
                   }
                 ]
          }
    ],

  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }),

    new HtmlWebpackPlugin()
],

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on the final bundle. For now, we don't need production's JavaScript 
  // minifying and other things, so let's set mode to development
  mode: 'development'

};