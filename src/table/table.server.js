const prisma = require("../db");
const { findTable, insertTable, findTableById, deleteTable } = require("./table.repository")


const getAllTable = async () => {
    const table = await findTable();
  
    return table;
};

const getTableById = async (id) => {
    const table = await findTableById(id);
  
    if (!table) {
      throw Error("table not found");
    }
  
    return table;
  };

const createTable = async (newTableData) => {
   const table = await insertTable(newTableData);
  
   return table;
};

const deleteTableById = async (id) => {
    await getTableById(id);
  
    await deleteTable(id);
  };


module.exports = {
    getAllTable,
    getTableById,
    createTable,
    deleteTableById
}



