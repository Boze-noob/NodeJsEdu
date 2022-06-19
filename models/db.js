const mysql = require("mysql");

console.log(process.env.DATABASE);
const connection = mysql.createConnection({
  host: "localhost",
  //cant read USER from .env file idk why?
  user: "root",
  password: "",
  database: "gym",
});

// open the MySQL connection
connection.connect(error => {
  if (error){
    console.log('this is your error');
    throw error;
  };
  console.log("Successfully connected to the database.");
});

module.exports = connection;