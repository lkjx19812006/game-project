import type from '../decorator'

class Hall {
  constructor() {

  }

  @type('get')
  test(req, res, next) {
    res.send({
      code: '1c01',
      msg: "1212操作成功",
    })
  }

  @type('post')
  testPost(req, res, next) {
    res.send({
      code: '1c01',
      msg: "123213123213",
    })
  }

}

export default new Hall()
