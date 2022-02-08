module.exports = {
    outputDir:__dirname + '/../server/admin',  //指定输出文件夹
    publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/' //生产环境
    : '/'  //开发环境
}