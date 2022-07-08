const mysql = require("./db.js");

const User = function(user) {
    this.ID = user.ID,
    this.Username = user.Username,
    this.Password = user.Password,
    this.Weight = user.Weight,
    this.Address = user.Address,
    this.Exercise_ID = user.Exercise_ID,
    this.Subscription_ID = user.Subscription_ID,
    this.Completed_workouts = user.Completed_workouts
}

User.getById = (id, result) => {
    mysql.query(`SELECT * FROM User WHERE ID = ${id}`, (err, res) => {
        if(err) {
            console.log("error happen", err)
            result(err, null);
            return 
        }        
        if(res.length) {
            result(null, res[0]);
            return;
        }
        result({kind: "not found" }, null);
    })
}

module.exports = User;