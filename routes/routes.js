var user = require('./user');

module.exports = function(express) {
  express.use('/user', user);
};
