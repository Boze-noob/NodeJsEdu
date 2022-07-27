const UserProgress = require('../../models/home/userProgress.js');

exports.get = (req, res) => {
    UserProgress.get(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.statusMessage = "Not found";
              res.status(404).send({
                message: `Not found`
              });
            } else {
              res.statusMessage = "Error retrieving user progress with id " + req.params.id; 
              res.status(500).send({
                message: "Error retrieving user progress with id " + req.params.id
              });
            }
          } else res.send(data);
    });
}
