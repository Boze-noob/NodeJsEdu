const BasicInfo = require('../../models/home/basicInfo.js');

exports.getBasicInfo = (req, res) => {
    BasicInfo.getBasicInfo(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found basic info with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving basic info with id " + req.params.id
            });
          }
        } else res.send(data);
      });
}