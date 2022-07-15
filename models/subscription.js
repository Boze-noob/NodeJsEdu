const mysql = require("./db.js");

const Subscription = function(subscription) {
    this.ID = subscription.ID,
    this.days = subscription.Days,
    this.gymId = subscription.Gym_ID
}



Subscription.getById = (id, result) => {
    mysql.query(`SELECT * FROM Subscription WHERE ID = ${id}`, (err, res) => {
        if(err) {
            console.log("error happen", err)
            result(err, null);
            return;
        }
        if(res.length) {
            result(null, new Subscription(res[0]));
            return;
        }
        result({kind: "not found" }, null);
    });
}

module.exports = Subscription;