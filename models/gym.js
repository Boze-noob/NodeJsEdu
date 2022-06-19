const mysql = require("./db.js");

const Gym = function(gym) {
    this.address = gym.address,
    this.cordinates = gym.cordinates,
    this.name = gym.name
}

Gym.getAll = (result) => {
    console.log("we are into gym model");
    let query = "SELECT * FROM gym";

    mysql.query(query, (err, res) => {
        if(err) {
            console.log("error:", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

module.exports = Gym;