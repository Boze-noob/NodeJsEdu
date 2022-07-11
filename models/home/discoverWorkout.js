const mysql = require("../db.js");

const DiscoverWorkout = function(discoverWorkout) {
    this.title = discoverWorkout.title,
    this.Num_of_exercises = discoverWorkout.numOfExercises,
    this.time = discoverWorkout.time,
    this.Background_color = discoverWorkout.backgroundColor,
    this.image = discoverWorkout.image
};

DiscoverWorkout.post = (newDiscoverWorkout, result) => {
    mysql.query("INSERT INTO discover_workout SET ?", newDiscoverWorkout, (err, res) => {
        if(err) {
            console.log("Error in discover workout", err);
            result(err, null);
            return;
        }
        let newDiscoverWorkoutId = res.insertId;
        result(null, {newDiscoverWorkout, newDiscoverWorkoutId});
    });
};

DiscoverWorkout.get = (result) => {
    mysql.query(`SELECT * FROM discover_workout `, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
          if (res.length) {
            console.log("found discover workouts: ", res);
            result(null, res);
            return;
          }
      
          result({ kind: "not_found" }, null);
    });
}
module.exports = DiscoverWorkout;