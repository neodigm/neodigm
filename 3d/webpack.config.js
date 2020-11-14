const path = require('path')

module.exports = {
  entry: './a55_3d_template.js',
  output: {
    path: path.resolve(__dirname, '../static/js'),
    filename: 'a55_3d.js',
  },
  devServer: {
    publicPath: '/public/',
    compress: true,
    port: 9000,
  },
}
