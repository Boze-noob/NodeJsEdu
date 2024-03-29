const express = require('express')
const userController = require('../controllers/userController.js')

const router = express.Router();
router.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

router.get('/get/:id', userController.getById);
router.post('/post/signup', userController.postMiddleware, userController.postSignUp);
router.post('/post/login', userController.postLogIn);
router.delete('/delete/:id', userController.delete);

module.exports = router;