const mysql = require("../db.js");

const BasicInfo = function(basicInfo) {
    this.completedWorkouts = basicInfo.Completed_workouts,
    this.weight = basicInfo.Weight,
    this.daysLeft = basicInfo.Days
}

BasicInfo.getBasicInfo = (id, result) => {
    mysql.query(`SELECT User.Weight, User.Completed_workouts, Subscription.Days FROM User INNER JOIN Subscription ON User.Subscription_ID=Subscription.ID WHERE User.Subscription_ID=${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
          if (res.length) {
            console.log("found basic info: ", new BasicInfo(res[0]));
            result(null, new BasicInfo(res[0]));
            return;
          }
      
          result({ kind: "not_found" }, null);
    });
};

module.exports = BasicInfo;