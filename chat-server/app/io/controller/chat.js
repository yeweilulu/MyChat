const Controller = require('egg').Controller;

class ChatController extends Controller {
    async index() {

        const { ctx, app } = this;
        const nsp = app.io.of('/');
        const message = ctx.args[0] || {};
        console.log(message)
        // 将消息广播给所有客户端
        nsp.emit('message', message);
    }
    async connect() {
        console.log(123)
        const { app, socket } = this.ctx;
        // 获取连接的客户端的信息
        const { id } = socket;
        // 在服务器端打印连接信息
        console.log(`Client connected: ${id}`);
    }
}

module.exports = ChatController;