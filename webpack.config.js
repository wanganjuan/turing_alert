const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  entry: './src/dialog/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 't-dialog.js',
    library: 't-dialog', 
    libraryTarget: 'umd', // 很重要，保证能通过import 进行引用
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.stylus$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
      },
     {
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}