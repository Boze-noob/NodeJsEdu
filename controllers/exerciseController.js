const Exercise = require('../models/exercise.js');

exports.getAll = (req, res) => {
    Exercise.getAll((err, data) => {
        if(err)
        res.status(500).send({
           message: err.message || "Some error happen while getting Gyms" 
        });
        else res.send(data);
    });
};