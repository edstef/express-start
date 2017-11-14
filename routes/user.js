const express = require('express');
const router = express.Router();

const UserModel = require('../models/user');

var methods = {
  createUser: function(req, res) {
    var body = req.body;

    UserModel.create({name:"Eddie"}).then(function(user) {
      res.send({
        user
      });
    });

  },
  updateUser: function(req, res) {

  }
};

router.post('/', methods.createUser);
router.put('/:id', methods.updateUser);

module.exports = Object.assign(router, {methods: methods});
