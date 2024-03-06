
// config/db.js
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-project",
  password: "Vishal@1307"
});

module.exports = pool;

// // config/db.js

// const mysql = require("mysql2/promise");

// module.exports = async () => {
//   try {
//     const pool = await mysql.createPool({
//       host: "localhost",
//       user: "root",
//       database: "node-project",
//       password: "Vishal@1307"
//     });
//     console.log("Created pool to database");
//     return pool; // Return the pool object
//   } catch (err) {
//     console.error("Error creating pool:", err);
//     throw err; // Rethrow the error to handle it in the caller
//   }
// };
