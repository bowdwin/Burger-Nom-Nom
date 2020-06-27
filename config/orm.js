const connection = require("../config/connection");

const createQmarks = (num) => {
  const arr = [];
  for (const i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
};

const translateSql = (ob) => {
  const arr = [];
  for (const key in ob) {
    const value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
};

const orm = {
  all: (table, cb) => {
    const dbQuery = `SELECT * FROM ${table};`;

    connection.query(dbQuery, (err, res) => {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  create: (table, cols, vals, cb) => {
    const dbQuery =
      "INSERT INTO " +
      table +
      " (" +
      cols.toString() +
      ") " +
      "VALUES (" +
      createQmarks(vals.length) +
      ") ";

    console.log(dbQuery);
    connection.query(dbQuery, vals, (err, res) => {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  update: (table, objColVals, condition, cb) => {
    const dbQuery =
      "UPDATE " +
      table +
      " SET " +
      translateSql(objColVals) +
      " WHERE " +
      condition;

    console.log(dbQuery);

    connection.query(dbQuery, (err, res) => {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  delete: (table, condition, cb) => {
    const dbQuery = "DELETE FROM " + table + " WHERE " + condition;
    console.log(dbQuery);

    connection.query(dbQuery, (err, res) => {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
};
module.exports = orm;
