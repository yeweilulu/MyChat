'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/user/login', controller.login.userLogin);
  router.post('/user/signin', controller.login.userSignin);
};
