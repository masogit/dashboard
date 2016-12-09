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
  mainScss: 'src/scss/index.scss',
  devServerPort: 9001,
  devServerProxy: {
    '**': "http://localhost:8080"
  },
  webpack: {
    devtool: 'cheap-source-map'
  }
};
