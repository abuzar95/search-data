const router = require('express').Router();
const { user } = require('../handlers');
const handler = new user();


router.get('/getAllUsers', handler.getAllUsers);

module.exports = {
    user: router,
  };