// A central hub that operates the application updates

var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

module.exports = AppDispatcher;
