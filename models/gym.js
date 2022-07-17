const mysql = require("./db.js");

const Gym = function(gym) {
    this.address = gym.address,
    this.cordinates = gym.cordinates,
    this.name = gym.name
}

Gym.getAll = (result) => {
    let query = "SELECT * FROM gym";

    myql.query(query, (err, res) => {
        if(err) {
            console.log("error:", err);
            result(err, null);
            return;
        }
        result(null, res);
    });
};

Gym.post = (newGym, result) => {
    mysql.query("INSERT INTO gym SET ?", newGym, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      
      let newGymId = res.insertId;
      result(null, {newGym, newGymId});
    });
  };
  
  Gym.getById = (id, result) => {
    mysql.query(`SELECT * FROM gym WHERE ID = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found Gym: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };
  
  Gym.put = (id, Gym, result) => {
    mysql.query(
      "UPDATE gym SET address = ?, cordinates = ?, name = ? WHERE ID = ?",
      [Gym.address, Gym.cordinates, Gym.name, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Tutorial with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated Gym: ", { id: id, ...Gym });
        result(null, { id: id, ...Gym });
      }
    );
  };
  
  Gym.delete = (id, result) => {
    mysql.query("DELETE FROM gym WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted tutorial with ID: ", id);
      result(null, res);
    });
  };

module.exports = Gym;