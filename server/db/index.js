var mysql = require('mysql2');
const Promise = require('bluebird');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// const db = Promise.promisifyAll(connection, {multiArgs: true});
const db = Promise.promisifyAll(connection, {multiArgs: true});

db.connectAsync()
  .then(() => console.log('CONNECTION TO DATABASE IS SUCCESSFUL!'))
  // .then(() =>
  //   db.queryAsync('CREATE DATABASE IF NOT EXISTS chat')
  // )
  .then(() =>
    db.queryAsync(
      'CREATE TABLE IF NOT EXISTS messages (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, user VARCHAR(255) NOT NULL, text VARCHAR(255) NOT NULL, roomname VARCHAR(255) NOT NULL)'
    )
  )
  .catch((err) => {
    console.error(err);
  });

module.exports.db = db;
