const mysql = require("mysql");
let connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // TODO: Finish updating this
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: "sandbox_db",
  });
}
connection.connect();

module.exports = connection;
