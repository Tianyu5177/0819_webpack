const path = require('path');

module.exports = {
  entry: './src/js/index.js', //指定入口文件在哪里
  /*entry: {
    peiqi: './src/js/index.js'
  },*/
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'index.js'
  },//指定输出位置、文件名
  mode: 'development', //工作模式
  //用到的所有loader都需要配置在module对象中的rules数组中，每个loader都是一个对象。
  module: {
    rules: [
      {
        test: /\.less$/, //匹配所有less文件
        use:[
          'style-loader', // 创建style标签，添加上js中的css代码
          'css-loader', // 将css以commonjs方式整合到js文件中
          'less-loader'  // 将less文件解析成css
        ]
      }
    ]
  }
};