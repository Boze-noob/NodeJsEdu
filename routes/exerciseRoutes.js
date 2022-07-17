const express = require('express');
const exerciseController = require('../controllers/exerciseController.js');

const router = express.Router();
router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

router.get('/getAll', exerciseController.getAll);

module.exports = router;