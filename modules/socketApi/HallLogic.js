"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorator_1 = require("../decorator");
var HallManager = /** @class */ (function () {
    function HallManager(socket) {
        // socket 连接成功后的返回参数
        this.socket = null;
        this.socket = socket;
        this.init();
    }
    // 初始化成员方法
    HallManager.prototype.init = function () {
        for (var key in this) {
            console.log(key);
            if (this[key] && this[key] instanceof Function)
                this.socket.on(key, this[key]);
        }
    };
    HallManager.prototype.addUser = function (data) {
        console.log(data);
    };
    __decorate([
        decorator_1.api(false)
    ], HallManager.prototype, "init", null);
    __decorate([
        decorator_1.api()
    ], HallManager.prototype, "addUser", null);
    return HallManager;
}());
exports.default = HallManager;
