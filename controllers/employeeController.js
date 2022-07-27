const Employee = require('../models/employee.js');

exports.getById = (req, res) => {
    Employee.getById(req.params.id, (err, data) => {
        if(err) {
            if(err.kind === "not_found") {
              res.statusMessage = "Not found employee with id " + req.params.id; 
                res.status(404).send({
                    message: "Not found employee with id " + req.params.id
                });
            } else {
              res.statusMessage = "Error while retrieving employee"; 
                res.status(500).send({
                    message: "Error while retrieving employee"
                });
            }
        } else res.status(200).send(data);
    });
};

exports.getAllByGymId = (req, res) => {
    Employee.getAllByGymId(req.params.id, (err, data) => {
        if(err) {
            if(err.kind === "not_found") {
              res.statusMessage = "Not any employees by this gym id " + req.params.id; 
                res.status(404).send({
                    message: "Not any employees by this gym id " + req.params.id
                });
            } else {
              res.statusMessage = "Error while retrieving employees"; 
                res.status(500).send({
                    message: "Error while retrieving employees"
                });
            }
        } else res.status(200).send(data);
    });
};

exports.post = (req, res) => {
    if (!req.body) {
      res.statusMessage = "Content can not be empty!"; 
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
      Employee.post(Employee.toDatabaseModel(req.body), (err, data) => {
        if (err) {
          res.statusMessage = err.message || "Some error occurred while creating the new employee."; 
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the new employee."
          });
        }
        
      else res.status(200).send(data);
      });
};

exports.delete = (req, res) => {
    Employee.delete(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.statusMessage = `Not found Employee with id ${req.params.id}.`; 
          res.status(404).send({
            message: `Not found Employee with id ${req.params.id}.`
          });
        } else {
          res.statusMessage = "Could not delete Employee with id " + req.params.id; 
          res.status(500).send({
            message: "Could not delete Employee with id " + req.params.id
          });
        }
      } else res.status(200).send({ message: `Employee was deleted successfully!` });
    });
  };

