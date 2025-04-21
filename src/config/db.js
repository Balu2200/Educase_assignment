const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  port: 3306, 
  user: "root",
  password: "system",
  database: "school_management",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});


pool
  .getConnection()
  .then((connection) => {
    console.log("Database connected successfully");
    connection.release();
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });

module.exports = pool;
