const Gym = require('../models/gym.js');

exports.getAll = (req, res) => {
    Gym.getAll((err, data) => {
        if(err){
         res.statusMessage = err.message || "Some error happen while getting Gyms" ;
          res.status(500).send({
            message: err.message || "Some error happen while getting Gyms" 
         });
        }
        else res.send(data);
    });
}

exports.getById = (req, res) => {
    Gym.getById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.statusMessage = `Not found Post with id ${req.params.id}.`;
          res.status(404).send({
            message: `Not found Post with id ${req.params.id}.`
          });
        } else {
          res.statusMessage = "Error retrieving Post with id " + req.params.id;
          res.status(500).send({
            message: "Error retrieving Post with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

exports.post = (req, res) => {
    // Validate request
    if (!req.body) {
      res.statusMessage = "Content can not be empty!";
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    const gym = new Post({
     address: req.body.address,
     cordinates: req.body.cordinates,
      name: req.body.name
    });
  
    Gym.post(gym, (err, data) => {
      if (err) {
        res.statusMessage = err.message || "Some error occurred while creating the Gym.";
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Gym."
        });
      }
      else res.send(data);
    });
  };
  
  exports.put = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.statusMessage = "Content can not be empty!";
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Gym.put(
      req.params.id,
      new Gym(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.statusMessage = `Not found Gym with id ${req.params.id}.`;
            res.status(404).send({
              message: `Not found Gym with id ${req.params.id}.`
            });
          } else {
            res.statusMessage = "Error updating Gym with id " + req.params.id;
            res.status(500).send({
              message: "Error updating Gym with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };
  
  exports.delete = (req, res) => {
    Gym.delete(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.statusMessage = `Not found Gym with id ${req.params.id}.`
          res.status(404).send({
            message: `Not found Gym with id ${req.params.id}.`
          });
        } else {
          res.statusMessage = "Could not delete Gym with id " + req.params.id;
          res.status(500).send({
            message: "Could not delete Gym with id " + req.params.id
          });
        }
      } else res.send({ message: `Gym was deleted successfully!` });
    });
  };