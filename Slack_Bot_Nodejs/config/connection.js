var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "172.21.3.49",
  user: "intern",
  password: "intern",
  database: "internship",
  port: 3306
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected! Successfull")
});

module.exports = connection;

