const prisma = require("../db");
const { findTable, insertTable } = require("./table.repository")


const getAllTable = async () => {
    const table = await findTable();
  
    return table;
};

const createTable = async (newTableData) => {
   const table = await insertTable(newTableData);
  
   return table;
};


module.exports = {
    getAllTable,
    createTable
}



