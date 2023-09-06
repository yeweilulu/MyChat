'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller, io } = app;
  router.post('/user/login', controller.login.userLogin);
  router.post('/user/signin', controller.login.userSignin);
  // io.route('connect', io.controller.chat.connect);
  io.of('/index').route('server', io.controller.chat.index);
};
