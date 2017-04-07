module.exports = {//https://webpack.js.org
  entry: './dist/index.js',
  output: {
    filename: '/bundle.js',
    path: __dirname+'/dist/build/'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      // {
      //   test: /\.js$/,
      //   loader: 'js-loader',
      //   exclude: /node_modules/
      // },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        enforce: 'pre',
        test: /\.ts?$/,
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js",".css"]
  },
  devtool: 'inline-source-map'
  // ,devServer : { //https://webpack.js.org/configuration/dev-server/
  //   contentBase : [__dirname+"/public/", __dirname+"/dist/"],//static files
  //   // publicPath : "/dist/build/", // webpack results
  //   port : 9000,
  //   inline : true,
  //   compress : true,
  //   watchContentBase : true,
  //   watchOptions: {
  //     poll: false //set to true if files are on NFS(NetworkFiileSystems) or similar
  //   },
  //   noInfo : false,
  //   quiet : false
  // }
};
