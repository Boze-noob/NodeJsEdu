const express = require('express');
const basicInfoController = require('../controllers/home/basicInfoController.js');

const router = express.Router();
router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  router.get('/get/basicInfo/:id', basicInfoController.getBasicInfo);

  module.exports = router;