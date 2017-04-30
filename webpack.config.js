var path = require('path')

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'app', 'app.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}
