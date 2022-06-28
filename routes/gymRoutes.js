const express = require('express');
const gymController = require('../controllers/gymController.js');

const router = express.Router();
router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

router.get('/getAll', gymController.gymGetAll);
router.get('/get/:id', gymController.getById);
router.post('/post', gymController.post);
router.put('/put/:id', gymController.put);
router.delete('/delete/:id', gymController.delete);

module.exports = router;