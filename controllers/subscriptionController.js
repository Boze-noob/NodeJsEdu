const Subscription = require('../models/subscription.js');

exports.getById = (req, res) => {
    Subscription.getById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Subscription with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error retrieving Subscription with id " + req.params.id
              });
            }
          } else res.send(data);
    });
}