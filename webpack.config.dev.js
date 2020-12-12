import path from 'path';

export default {
  // debug: true,
  devtool: 'inline-source-map', //'cheap-module-eval-source-map' is the preferred dev source map, but issue with chrome v53 http://stackoverflow.com/q/39380095/85326
  // noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    // loaders: [
    //   {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
    //   {test: /\.css$/, loaders: ['style','css']}
    // ]
  }
}
