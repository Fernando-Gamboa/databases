var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, response) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).json(response);
      }
    });
  },
  post: function (req, res) {
    models.users.create(req.body, (err, response) => {
      console.log(req.body);
      if (err) {
        res.send(err);
      } else {
        res.status(200).json(response);
      }
    });
  }
};
