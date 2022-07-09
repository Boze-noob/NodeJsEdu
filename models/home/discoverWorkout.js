const mysql = require("../db.js");

const DiscoverWorkout = function(discoverWorkout) {
    this.title = discoverWorkout.title,
    this.numOfExercises = discoverWorkout.numOfExercises,
    this.time = discoverWorkout.time,
    this.backgroundColor = discoverWorkout.backgroundColor,
    this.image = discoverWorkout.image
}

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
}