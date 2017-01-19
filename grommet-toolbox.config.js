import path from 'path';

export default {
  copyAssets: [
    'src/index.html',
    {
      asset: 'src/img/**',
      dist: 'dist/img/'
    }
  ],
  jsAssets: ['src/js/**/*.js'],
  mainJs: 'src/js/index.js',
  // mainScss: 'src/less/index.less',
  devServerPort: 9001,
  webpack: {
    module: {
      loaders: [
        {
          test: /\.less$/,
          loader: 'style!css!less'
        }
      ]
    }
  }

};
