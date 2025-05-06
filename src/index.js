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


app.use("/product", productsController) 
app.use("/table", tableController)



app.listen(PORT, () => {
  console.log(`runing in port ${PORT}`);
});