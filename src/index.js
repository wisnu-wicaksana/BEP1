const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")  


const app = express();

dotenv.config();

const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("HELLO WORLD");
});

const productsController = require("./product/product.controller")
const tableController = require("./table/table.controller")
const orderRoutes = require('./order/order.route');

app.use("/product", productsController) 
app.use("/table", tableController)
app.use("/order", orderRoutes) 



app.listen(PORT, () => {
  console.log(`runing in port ${PORT}`);
});