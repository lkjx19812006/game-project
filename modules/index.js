const express = require("express");
const { logger } = require('../common/log');

let app = express();

process.on('uncaughtException', (err) => {
  console.log(err)
  logger.error('捕获全局错误: ', err)
})


//所有客户端接口
const webApi = require('./webApi/index');
webApi.forEach(item => {
  app.use(item.path, item.handle);
});









// 网页目录
app.use(express.static('public'));
logger.info('路由加载完成>>>');
module.exports = app;