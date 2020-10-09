const mysql = require("mysql");

var connection = mysql.createPool({
    host: "localhost",
    user: "test",
    password: "test",
    database: "testdb",
    port: 3307,
});

module.exports = connection;