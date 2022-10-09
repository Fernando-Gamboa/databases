var db = require('../db');

module.exports = {
  getAll: function (callback) {
    let query = 'SELECT users FROM users';
    db.query(query, [], (err, response) => {
      console.log(response);
      callback(err, response);
    });
  },
  create: function (inputObj, callback) {
    console.log(inputObj, 'USERNAME input');
    let query = `INSERT INTO users (users) VALUES ("${inputObj.username}")`;
    db.query(query, [], (err, response) => {
      callback(err, response);
    });
  }
};
