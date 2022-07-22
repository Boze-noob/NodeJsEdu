const User = require('../models/user.js');
const multer = require('multer');
const bcrypt = require('bcrypt');

//Profile images will be stored in non-public folder
const storage = multer.diskStorage({
  destination: function(req, file, cb){
      cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
      cb(null, Math.floor(100000 + Math.random() * 900000) + '_' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
  } else {
      cb(new Error("Can't store this type of file, please use jpeg or png type of file."), false);
  }
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

exports.getById = (req, res) => {
    User.getById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not found") {
              res.status(404).send({
                message: `Not found User with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error retrieving User with id " + req.params.id
              });
            }
          } else res.status(200).send(data);
    });
};

exports.post = async (req, res) => {
  if(!req.body) {
    res.status(400).send({
      message: "Body should not be empty"
    });
  }
  User.getEmail(req.body.email, (err, data) => {
    if (err) {
        res.status(500).send({
          message: err
        });
        //If there is no user in database with this email
    } else if(!data) {
  //This should be done in model part, I will refactor later
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if(err) {
      res.status(500).send({
        message: "Error occurred while hashing the user password!"
      });
  } else {
    req.body.password = hash;
    const user = User.toDatabaseModel(req);
    User.post(user, (err, data) => {
      if(err) {
        res.status(500).send({
          message: err.message || "Some error occurred while creating new user!"
        });
      }
      else res.status(200).send(data);
    });
  }
  });
  //There is user with this email in database
    } else {
      res.status(409).send({
        message: "User with this email already exist"
      })
    }
  });  
};

exports.delete = (req, res) => {
  User.delete(req.params.id, (err, data) => {
      if (err) {
          if (err.kind === "not found") {
            res.status(404).send({
              message: `Not found User with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error while deleting User with id " + req.params.id
            });
          }
        } else res.status(200).send({
          message: "Successfully deleted user with id " + req.params.id
        })
  });
};

exports.postMiddleware = upload.single('profileImage')