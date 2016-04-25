var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'cosearch'
    },
    port: 3000
  },

  test: {
    root: rootPath,
    app: {
      name: 'cosearch'
    },
    port: 3333
  },

  production: {
    root: rootPath,
    app: {
      name: 'cosearch'
    },
    port: 3000
  }
};

module.exports = config[env];
