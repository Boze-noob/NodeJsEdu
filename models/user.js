const mysql = require("./db.js");

const User = function(user) {
    this.ID = user.ID,
    this.username = user.Username,
    this.email = user.Email,
    this.password = user.Password,
    this.weight = user.Weight,
    this.address = user.Address,
    this.exerciseId = user.Exercise_ID,
    this.subscriptionId = user.Subscription_ID,
    this.completedWorkouts = user.Completed_workouts,
    this.profileImage = user.Profile_image
}

User.toDatabaseModel = function(req) {
    return {
        ID : req.body.ID,
        Username : req.body.username,
        Email : req.body.email,
        Password : req.body.password,
        Address : req.body.address,
        Weight : req.body.weight,
        Profile_image : (!req.file) ? undefined : req.file.path,
        Completed_workouts : req.body.completedWorkouts,
        Subscription_ID : req.body.subscriptionId,
        Exercise_ID : req.body.exerciseId
    }  
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

User.postSignUp = (newUser, result) => {
    mysql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if(err) {
            console.log("Error while inserting into database occured: ", err)
            result(err, null);
            return;
        }
        result(null, newUser);
    })
};

User.getByEmail = (email, result) => {
    mysql.query("SELECT * FROM User WHERE Email = ?", email, (err, res) => {
        if(err) {
            console.log("error happen", err)
            result(err, null);
            return;
        } 
        if(res.length) {
            result(null, res);
            return;
        }
        result(null, null);
        return;
    });
};

User.delete = (id, result) => {
    mysql.query(`DELETE FROM User WHERE ID = ${id}`, (err, res) => {
        if(err) {
            result(err, null);
            return 
        }        
        if(res.affectedRows > 0) {
            result(null, res);
            return;
        }
        result({kind: "not found" }, null);
    })
};

module.exports = User;