let express = require("express");
let router = express.Router();
// 请求方式
function type(value: string): Function {
  /**
   * @param {target} 静态成员时是构造函数， 实例成员时是原型对象
   * @param {methodName} 成员的名字
   * @param {descriptor} 成员的属性描述符
  */
  return function (target: any, methodName: string, descriptor: PropertyDescriptor): void {
    let type = value || 'get'; // 默认get请求
    switch (type) {
      case 'get':
        router.get(`/${methodName}`, (req, res, next) => {
          target.prototype && (target.prototype[methodName](req, res, next));
        })
        break;
      case 'post':
        router.get(`/${methodName}`, (req, res, next) => {
          target.prototype && (target.prototype[methodName](req, res, next));
        })
        break
    }
  }
}


export default type
