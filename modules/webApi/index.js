let path = require('path')
let glob = require('glob')
let fs = require("fs")

//读取的路径
let BASE_PATH = path.resolve(__dirname, './**.js');
// 同步拿到所有的文件即文件夹 是可选的
let files = glob.sync(BASE_PATH); // 拿到下面所有的js文件

let filterfs = [];
// 过滤文件夹
files.forEach(item => {
  let stat = fs.lstatSync(item);
  if (!stat.isDirectory()) {
    filterfs.push(item);
  }
})

let api = [];
filterfs.forEach(path => {
  let fileName = path.split('/').pop();
  let name = fileName.match(/(.*).js/)[1];
  if (name == 'index') return;

  let item = require(path);
  let apiModule = item.default; // 获取默认导出
  
  for (let key in apiModule) {
    let apiItem = {
      path: '',
      handle: null
    };
    apiItem.path = `/${name}/${key}`;
    apiItem.handle = apiModule[key];
    // 添加路径以及方法 路由路径为对象的方法名 执行函数为对象的方法
    if (apiItem.path && apiItem.handle) {
      api.push(apiItem)
    }
  }

})

module.exports = api;


