const mysql = require("./db.js");

const Exercise = function(exercise) {
    this.ID = exercise.ID,
    this.pushUps = exercise.Push_ups,
    this.squats = exercise.Squats,
    this.bench = exercise.Bench,
    this.pullUps = exercise.Pull_ups
}

Exercise.getAll = (result) => {
    mysql.query("SELECT * FROM exercise", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    });
};

module.exports = Exercise;