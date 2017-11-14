const express = require('express');
const router = express.Router();

var methods = {
  getUsers: function() {
    console.log("hellooo")
  }
};

router.get('/', methods.getUsers);

module.exports = Object.assign(router, {methods: methods});
