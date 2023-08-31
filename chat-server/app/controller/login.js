'use strict';

const { Controller } = require('egg');
class HomeController extends Controller {
  async userLogin() {
    const { ctx } = this;

    let res = await this.service.login.userLogin(ctx.request.body)
    let { code, message, data } = res
    if (code !== 200) {
      ctx.body = {
        code,
        message,
        data
      }
    } else {
      let token = this.app.jwt.sign({ data }, this.config.jwt.secret);
      ctx.body = {
        code,
        message,
        data: {
          username: data.username,
          token: token
        },
      }
    }


  }
  async userSignin() {
    const { ctx } = this;

    let res = await this.service.login.userSignin(ctx.request.body)
    ctx.body = res
  }
}

module.exports = HomeController;
