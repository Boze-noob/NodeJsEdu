const express = require('express');
const basicInfoController = require('../controllers/home/basicInfoController.js');
const discoverWorkoutController = require('../controllers/home/discoverWorkoutController.js');
const userProgressController = require('../controllers/home/userProgressController.js');
const checkAuth = require('../middleware/check-auth.js');

const router = express.Router();
router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  router.get('/get/basicInfo/:id', basicInfoController.getBasicInfo);
  router.get('/get/discoverWorkout', checkAuth, discoverWorkoutController.get);
  router.post('/post/discoverWorkout',discoverWorkoutController.postMiddleware, discoverWorkoutController.post);
  router.get('/get/userProgress/:id', userProgressController.get);

  module.exports = router;