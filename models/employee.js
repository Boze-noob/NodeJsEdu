const mysql = require("./db.js");

const Employee = function(employee) {
    this.ID = employee.ID,
    this.firstName = employee.First_name,
    this.lastName = employee.Last_name,
    this.age = employee.Age,
    this.gymId = employee.Gym_ID,
    this.roleId = employee.Role_ID  
}

Employee.toDatabaseModel = function(req) {
    return {
        ID : req.ID,
        First_name : req.firstName,
        Last_name : req.lastName,
        Age : req.age,
        Gym_ID : req.gymId,
        Role_ID : req.roleId,
    }  
};

Employee.getById = (id, result) => {
    mysql.query(`SELECT * FROM employee WHERE ID = ${id}`, (err, res) => {
        if(err) {
            console.log(err);
            result(err, null);
            return;
        }
        if(res.length) {
            result(null, new Employee(res[0]));
            return;
        }
        result({kind: "not_found"}, null);
    });
};

Employee.getAllByGymId = (id, result) => {
    mysql.query(`SELECT * FROM employee WHERE Gym_ID = ${id}`, (err, res) => {
        if(err) {
            console.log(err);
            result(err, null);
            return;
        }
        if(res.length) {
            //TODO create new array
            result(null, res);
            return;
        }
        result({kind: "not_found"}, null);
    });
}

Employee.post = (newEmployee, result) => {
    mysql.query("INSERT INTO employee SET ?", newEmployee, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
          result(null, newEmployee);
    });
};

Employee.delete = (id, result) => {
    mysql.query(`DELETE FROM employee WHERE ID = ${id}`, (err, res) => {
        if(err) {
            result(err, null);
            return 
        }        
        if(res.affectedRows > 0) {
            result(null, res);
            return;
        }
        result({kind: "not_found" }, null);
    })
};

module.exports = Employee;