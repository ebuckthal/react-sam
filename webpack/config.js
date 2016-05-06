import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export const ROOT_PATH = path.join(__dirname, '..');
export const APP_PATH = `${ ROOT_PATH }/src`;
export const CONFIG = {
   entry: `${ APP_PATH }/main`,
   context: APP_PATH,

   module: {
      /*
       preLoaders: [
          { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ }
       ],
       */

      loaders: [
         {
            test: /\.(png|jpg)$/,
            loaders: [
               "file-loader?name=img/img-[hash:6].[ext]",
               "img?minimize&optimizationLevel=7"
            ]
         },
         { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
         {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css?minimize!sass'),
            exclude: /node_modules/
         }
      ]
   },

   imagemin: {
      optipng: { optimizationLevel: 7 },
      pngquant: {
         floyd: 0.5,
         speed: 7
      }
   },

   resolve: {
      extensions: ['', '.js', '.scss'],

      alias: {
         constants: `${ APP_PATH }/constants`,
         actions: `${ APP_PATH }/actions`,
         components: `${ APP_PATH }/components`,
         reducers: `${ APP_PATH }/reducers`,
         containers: `${ APP_PATH }/containers`,
         styles: `${ APP_PATH }/assets/styles`,
         images: `${ APP_PATH }/assets/images`
      }
   },

   plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.NoErrorsPlugin(),
      new HtmlWebpackPlugin({
            template: `${ APP_PATH }/template.html`
      })
   ]
};
