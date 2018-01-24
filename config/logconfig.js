let path = require('path');

// __dirname：    获得当前执行文件所在目录的完整目录名
// __filename：   获得当前执行文件的带有完整绝对路径的文件名
// process.cwd()：获得当前执行node命令时候的文件夹目录名 
// ./：           文件所在目录

let errorLogPath = path.resolve(__dirname, './../log/error/error');
let responseLogPath = path.resolve(__dirname, './../log/res/res');

module.exports