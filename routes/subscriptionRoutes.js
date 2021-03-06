const express = require('express');
const subscriptionController = require('../controllers/subscriptionController.js');

const router = express.Router();
router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  router.get('/get/:id', subscriptionController.getById);

  module.exports = router;