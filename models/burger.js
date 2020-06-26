// TODO: crea(te model

const orm = require("../config/orm");

const burger = {
  all: (cb) => {
    orm.all("burgers", (results) => {
      cb(results);
    });
  },
  // cols and vals are arrays
  create: (cols, vals, cb) => {
    orm.create("burgers", cols, vals, (results) => {
      cb(results);
    });
  },
  update: (objColVals, condition, cb) => {
    orm.update("burgers", objColVals, condition, (results) => {
      cb(results);
    });
  },
  delete: (condition, cb) => {
    orm.delete("burgers", condition, (results) => {
      cb(results);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
