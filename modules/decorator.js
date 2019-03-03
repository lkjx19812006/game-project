"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
// 请求方式
function type(value) {
    /**
     * @param {target} 静态成员时是构造函数， 实例成员时是原型对象
     * @param {methodName} 成员的名字
     * @param {descriptor} 成员的属性描述符
    */
    return function (target, methodName, descriptor) {
        var type = value || 'get'; // 默认get请求
        switch (type) {
            case 'get':
                router.get("/" + methodName, function (req, res, next) {
                    target.prototype && (target.prototype[methodName](req, res, next));
                });
                break;
            case 'post':
                router.get("/" + methodName, function (req, res, next) {
                    target.prototype && (target.prototype[methodName](req, res, next));
                });
                break;
        }
    };
}
// 对象成员是否是API 处理
// 由于所有的api暴露都是通过实例化后 进行枚举 这里只要限制属性是否可以枚举就可以了
function api(value) {
    if (value === void 0) { value = true; }
    /**
     * @param {target} 静态成员时是构造函数， 实例成员时是原型对象
     * @param {methodName} 成员的名字
     * @param {descriptor} 成员的属性描述符
    */
    return function (target, methodName, descriptor) {
        descriptor.enumerable = value;
    };
}
exports.api = api;
exports.default = type;
