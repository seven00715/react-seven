module.exports = {
  rules: [
    {
      test: /\.css$/,
      // webapck 读取loader时 是从左到右读取，会将css文件先交给最右侧的loader
      // loader的执行顺序是从右到左以管道的方式链式调用
      // css-loader：解析css，使其支持css语法格式
      // style-loader: 将解析出来的结果放到 html中，使其生效
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.less$/,
      //less-loader 只是将less文件转成css语法
      use: ['style-loader', 'css-loader', 'less-loader']
    }
  ]
}
