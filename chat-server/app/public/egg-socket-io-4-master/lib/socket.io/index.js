"use strict";

const { Server: SocketIO } = require("../../socket.io/dist");
require("./namespace");
require("./socket");

SocketIO.prototype.route = function () {
  return this.sockets.route.apply(this.sockets, arguments);
};

module.exports = SocketIO;
