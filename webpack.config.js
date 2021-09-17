// eslint-disable-next-line
const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.ts',
  output: {
    // eslint-disable-next-line no-undef
    path: path.join(__dirname, 'dist'),
    filename: 'vuex-ultramini.js',
    library: 'vuex-ultramini',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
