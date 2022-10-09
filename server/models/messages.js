var db = require('../db');

module.exports = {
  getAll: function (callback) {
    let query = 'SELECT * FROM messages';
    db.query(query, [], (err, response) => {
      console.log(response);
      callback(err, response);
    });
  }, // a function which produces all the messages
  create: function (inputObj, callback) {
    console.log(inputObj, 'MESSAGES input');
    let query = `INSERT INTO messages (users, text, roomname) VALUES ("${inputObj.username}", "${inputObj.message}", "${inputObj.roomname}")`;
    db.query(query, [], (err, response) => {
      callback(err, response);
    });
  } // a function which can be used to insert a message into the database
};
