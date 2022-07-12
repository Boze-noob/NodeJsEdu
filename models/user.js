const mysql = require("./db.js");

const User = function(user) {
    this.ID = user.ID,
    this.username = user.Username,
    this.password = user.Password,
    this.weight = user.Weight,
    this.address = user.Address,
    this.exerciseId = user.Exercise_ID,
    this.subscriptionId = user.Subscription_ID,
    this.completedWorkouts = user.Completed_workouts,
    this.profileImage = user.Profile_image
}

User.toDatabaseModel = function(user) {
    this.ID = user.ID,
    this.Username = user.body.username,
    this.Password = user.body.password,
    this.Address = user.body.address,
    this.Weight = user.body.weight,
    this.Profile_image = user.file.profileImage,
    this.Completed_workouts = user.body.completedWorkouts
    this.Subscription_ID = user.body.subscriptionId,
    this.Exercise_ID = user.body.exerciseId
}

User.getById = (id, result) => {
    mysql.query(`SELECT * FROM User WHERE ID = ${id}`, (err, res) => {
        if(err) {
            console.log("error happen", err)
            result(err, null);
            return 
        }        
        if(res.length) {
            result(null, new User(res[0]));
            return;
        }
        result({kind: "not found" }, null);
    })
};

User.post = (newUser, result) => {
    mysql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if(err) {
            console.log("Error while inserting into database occured: ", err)
            result(err, null);
            return;
        }
        result(null, newUser);
    })
}

module.exports = User;