module.exports = (app) => {
    return async (ctx, next) => {
        ctx.socket.emit('chat', 'connected!');
        // console.log('chenggong')
        await next();
        // execute when disconnect.
        console.log('disconnection!');
    };
};