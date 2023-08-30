'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async userLogin() {
    const { ctx } = this;
    let res = await this.service.login.userLogin()
    ctx.body = res
  }
}

module.exports = HomeController;
