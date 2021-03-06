const nodeExternals = require('webpack-node-externals');
 const path = require('path');
 module.exports = {
     mode:'development',
     target: 'node',
     externals: [nodeExternals()],
     entry: {
         'index': './src/index.js'
     },
     output: {
         path: path.join(__dirname, 'dist'),
         filename: '[name].bundle.js',
         libraryTarget: 'commonjs2',
     },
     module: {
         rules: [{
             test: /\.js$/,
             exclude: /node_modules/,
             use:{
                loader:'babel-loader',
                 options: {
                  presets: ['@babel/preset-env'],
                  plugins: [require('@babel/plugin-proposal-object-rest-spread')]
                }
             }
         }]
     }
 }