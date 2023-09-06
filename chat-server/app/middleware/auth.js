
module.exports = (options, app) => {

    return async function auth(ctx, next) {
        
        if (!app.config.jwt.whiteList.includes(ctx.request.url)) {
            // let token = ctx.request.header?.authorization.substring(7)
            let token = ctx.request.header?.authorization
            if (token) {
                let res = await ctx.app.jwt.verify(token, options.secret, (err, decoded) => {
                    if (err) {
                        if (err.name === 'TokenExpiredError') { // token过期
                            return 'TokenExpiredError';
                        } else if (err.name === 'JsonWebTokenError') { // 无效的token
                            return 'JsonWebTokenError';
                        }
                    } else {
                        return decoded;
                    }
                });

                if (res === 'TokenExpiredError') {
                    ctx.body = {
                        code: 401,
                        message: '登录过期，请重新登录',
                    };
                    return;
                }

                if (res === 'JsonWebTokenError') {
                    ctx.body = {
                        code: 50012,
                        message: 'token无效，请重新登录',
                    };
                    return;
                }
                await next();
                
            } else {
                ctx.body = {
                    code: 403,
                    message: "请登陆后再次尝试！",
                    data: null
                }
            }
        } else {
            await next()
        }


    }
}