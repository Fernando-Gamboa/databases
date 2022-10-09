var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, response) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).json(response);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req.body, (err, response) => {
      console.log(req.body);
      if (err) {
        res.send(err);
      } else {
        res.status(200).json(response);
      }
    });
  } // a function which handles posting a message to the database
};
