const router = require('express').Router();
const { team } = require('../handlers');
const handler = new team();


router.get('/getAllTeams', handler.getAllTeams);

module.exports = {
    team: router,
  };