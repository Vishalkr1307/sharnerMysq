const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db1")


const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, // This specifies that it's a primary key
    autoIncrement: true // This specifies that it's auto-incremented
  },
  title:{
    type: DataTypes.STRING,
    allowNull:false
  },
  description:{
    type: DataTypes.STRING,
    allowNull:false

  }
  // Define other columns here
});

module.exports = Product;


//  module/Product.js
// const pool = require("../config/db");

// module.exports = class Product {
//     constructor(title, description, id) {
//         this.id = id || Math.floor(Math.random() * 10000); // Use provided ID or generate a new one
//         this.title = title;
//         this.description = description;
//     }

//     save() {
//         pool.execute(
//             "INSERT INTO products (id, title, description) VALUES (?, ?, ?)",
//             [this.id, this.title, this.description]
//         )
//         // pool.execute(
//         //     "INSERT INTO products (id, title, description) VALUES (?, ?, ?)",
//         //     [this.id, this.title, this.description]
//         // ).then(([rows, fields]) => {
//         //     console.log("Product saved successfully");
//         // }).catch(err => {
//         //     console.error("Error saving product:", err);
//         // });
//     }

//     static fetchAll() {
//        return  pool.query("SELECT * FROM products")
//         // pool.query("SELECT * FROM products").then(([rows, fields]) => {
//         //     cb(rows);
//         // }).catch(err => {
//         //     console.error("Error fetching products:", err);
//         //     cb([]);
//         // });
//     }
//     static singleId(id){
//         return pool.query("SELECT * FROM products WHERE id=?", [id])

//     }
//     static delelteItem(id){
//         return pool.query("DELETE FROM products WHERE id=?", [id])
//     }
//     static updateItem(id, item){
//         return pool.query("UPDATE products SET title=?, description=? WHERE id=?",[...item,id])
//     }
// };
