// app/service/user.js
const Service = require('egg').Service;
const { encrypt, decrypt } = require('../extend/encrypt')
class UserService extends Service {
    async queryUsername(username) {
        const res = await this.ctx.app.mysql.query(
            `select * from user where username = '${username}'`
        );
        if (res.length > 0) {
            return true
        } else {
            return false
        }
    }
    async userLogin({ username, password }) {

        let flag = await this.queryUsername(username)
        if (!flag) {
            return {
                code: 404,
                message: '账号不存在请前去注册',
                data: null
            }
        }
        const res = await this.ctx.app.mysql.query(
            `select * from user where username = '${username}' and password = '${encrypt(password)}'`
        );
        if (res.length > 0) {
            return {
                code: 200,
                message: '登陆成功',
                data: res[0]
            }
        }
        return {
            code: 404,
            message: '密码错误请重新登录',
            data: null
        }

    }
    async userSignin({ username, password }) {
        let flag = await this.queryUsername(username)
        if (flag) {
            return {
                code: 404,
                message: '账号已被注册,换一个号码吧',
                data: null
            }
        }
        const res = await this.ctx.app.mysql.query(
            `INSERT INTO user (id,username, password) VALUES
             ('${new Date().getTime() + username}', '${username}','${encrypt(password)}')`
        );
        if (res.affectedRows > 0) {
            return {
                code: 200,
                message: '注册成功,快去登录吧',
                data: null
            }
        }
        return {
            code: 500,
            message: '注册失败',
            data: null
        }

    }
}

module.exports = UserService;