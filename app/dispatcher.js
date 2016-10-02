var Guild = require("guid");

var listeners = {};

function dispatch(payload) {
  for (var id in listeners) {
    listeners[id](payload);
  }
}

function register(cb) {
  var id = Guild.create();
  listeners[id] = cb;
}

module.exports = {
  register: register,
  dispatch: dispatch
}