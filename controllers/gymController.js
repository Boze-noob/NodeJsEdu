const Gym = require('../models/gym.js');

exports.gymGetAll = (req, res) => {
    console.log("we are into controller");

    Gym.getAll((err, data) => {
        if(err)
        res.status(500).send({
           message: err.message || "Some error happen while getting Gyms" 
        });
        else res.send(data);
    });
}