"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorator_1 = require("../decorator");
var Hall = /** @class */ (function () {
    function Hall() {
    }
    Hall.prototype.test = function (req, res, next) {
        res.send({
            code: '1c01',
            msg: "1212操作成功",
        });
    };
    Hall.prototype.testPost = function (req, res, next) {
        res.send({
            code: '1c01',
            msg: "123213123213",
        });
    };
    __decorate([
        decorator_1.default('get')
    ], Hall.prototype, "test", null);
    __decorate([
        decorator_1.default('post')
    ], Hall.prototype, "testPost", null);
    return Hall;
}());
exports.default = new Hall();
