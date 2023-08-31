'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async userLogin() {
    const { ctx } = this;

    let res = await this.service.login.userLogin(ctx.request.body)
    ctx.body = res
  }
  async userSignin() {
    const { ctx } = this;

    let res = await this.service.login.userSignin(ctx.request.body)
    ctx.body = res
  }
}

module.exports = HomeController;
