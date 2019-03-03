import {api} from '../decorator'

export default class HallManager {
  constructor(socket) {
    this.socket = socket;
    this.init();
  }
  // socket 连接成功后的返回参数
  socket: any = null;

  // 初始化成员方法
  @api(false)
  init() {
    for (let key in this) {
      console.log(key);
      if (this[key] && this[key] instanceof Function)
        this.socket.on(key, this[key])
    }
  }

  @api()
  addUser(data) {
    console.log(data);
  }


}
