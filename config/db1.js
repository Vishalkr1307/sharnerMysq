// config/db1.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node-project", "root", "Vishal@1307", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;
