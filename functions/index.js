
const Server = require('./models/server');
const server = new Server();

exports.api = server.getApp();