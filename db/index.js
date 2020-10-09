const sql = require("./db.js");

// constructor
const User = function (user) {
  this.last_name = user.last_name;
  this.first_name = user.first_name;
};

User.getAll = result => {
  sql.query(
    `SELECT * FROM User WHERE last_name > 'Creevey' ORDER BY last_name LIMIT 5`,
    function (error, results, fields) {
      if (error) throw error;
      resultArray = JSON.parse(JSON.stringify(results));
      result (resultArray);
    }
  );
};

module.exports = User;
