const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3308,
  password: "helpme12#!",
  database: "mysql",
});

connection.connect();

connection.query(
  "select user, host, plugin from user",
  (error, rows, fields) => {
    if (error) throw error;
    console.log("result is: ", rows);
  }
);

connection.end();
