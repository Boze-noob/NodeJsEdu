const User = require('../models/user.js');

exports.getById = (req, res) => {
    User.getById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found User with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error retrieving User with id " + req.params.id
              });
            }
          } else res.send(data);
    });
};