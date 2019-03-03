//添加日志管理开始
const log4js = require('log4js');
const path = require('path');
log4js.configure({
  // 这里定义格式
  appenders: {
    console: {
      type: 'stdout'
    },
    error: {
      type: 'stderr'
    },
    datefile: {
      type: "dateFile",
      filename: path.join(__dirname, '../logs/LogFile'),//
      alwaysIncludePattern: true,
      pattern: "-yyyy-MM-dd.log",
      encoding: 'utf-8',//default "utf-8"，文件的编码
      maxLogSize: 11024  //文件最大存储空间
    },
    // 配置邮件发送 https://github.com/log4js-node/smtp
    // 'email': {
    //   type: '@log4js-node/smtp',
    //   recipients: 'dev.team@company.name',
    //   subject: 'Latest logs',
    //   sender: 'my.application@company.name',
    //   attachment: {
    //     enable: true,
    //     filename: 'latest.log',
    //     message: 'See the attachment for the latest logs'
    //   },
    //   sendInterval: 3600
    // }
  },
  categories: {
    default: {
      appenders: ['error', 'datefile'],
      level: log4js.levels.ALL
    },
    debug: {
      appenders: ['console'],
      level: log4js.levels.ALL //log4js.levels.ALL
    },
    api:{
      appenders: ['error', 'datefile'],
      level: log4js.levels.ALL //log4js.levels.ALL
    }
    // email: {
    //   appenders: ['email'],
    //   level: 'ERROR'
    // }
  }
});

const closeLog4js = (reason) =>{
  log4js.shutdown(()=>{
    console.log('app server shutdown: %s', reason);
    process.exit(1);
  })
}


module.exports = {
  logger: log4js.getLogger('default'),
  aLogger: log4js.getLogger('api'),
  dLogger: log4js.getLogger('debug'),
  closeLog4js,
  log4js
};

