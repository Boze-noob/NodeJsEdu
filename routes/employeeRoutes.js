const express = require('express');
const employeeController = require('../controllers/employeeController.js');

const router = express.Router();
router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  router.get('/get/:id', employeeController.getById);
  router.post('/post', employeeController.post);
  router.get('/getAll/:id', employeeController.getAllByGymId);
  router.delete('/delete/:id', employeeController.delete);

  module.exports = router;