// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
    async userLogin() {
        let sql = `select * from user`
        const res = await this.ctx.app.mysql.query(
            sql
        );
        return res;
    }
}

module.exports = UserService;