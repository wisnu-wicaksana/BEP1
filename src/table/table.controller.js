const express = require("express");
const prisma = require("../db");
const router = express.Router();

const { getAllTable, createTable, deleteTableById, getTableById  } = require("./table.server")

router.get("/", async (req, res) => {
    const table = await getAllTable();
  
    res.send(table);
});

router.get("/:id", async (req, res) => {
  try {
    const tableId = parseInt(req.params.id);
    const table = await getTableById(parseInt(tableId));

    res.send(table);
  } catch (err) {
    res.status(400).send(err.message);
  }
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

router.delete("/:id", async (req, res) => {
  try {
    const tableId = req.params.id; 

    await deleteTableById(parseInt(tableId));

    res.send("meja deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router; 



  