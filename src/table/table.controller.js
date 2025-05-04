const express = require("express");
const prisma = require("../db");
const router = express.Router();

const { getAllTable, createTable } = require("./table.server")

router.get("/", async (req, res) => {
    const table = await getAllTable();
  
    res.send(table);
});

router.post("/", async (req, res) => {
    try {
      const newTableData = req.body;
  
      const table = await createTable(newTableData);
  
      res.send({
        data: table,
        message: "create table success",
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
});










module.exports = router; 



  