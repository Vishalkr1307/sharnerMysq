const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const Home = require("./route/home");
const Product = require("./route/product");
const Contact = require("./route/contact");
const server = http.createServer(app);
const db = require("./config/db");
var port = 5500;
app.use(express.json());
app.use(express.static(path.join(__dirname, "Public")));
app.use("/", Home);
app.use("/product", Product);
app.use("/contact", Contact);
// console.log(db().then((res)=>console.log(res)))

server.listen(port, async () => {
  // await db();

  console.log(`Starting on port ${port}`);
});
