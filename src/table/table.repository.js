const prisma = require("../db");

const findTable = async () => {
    const table = await prisma.table.findMany();
  
    return table;
};

const findTableById = async (id) => {
  const table = await prisma.table.findUnique({
    where: {
      id,
    },
  });

  return table;
};


const insertTable = async (tableData) => {
    const table = await prisma.table.create({
      data: {
        number: tableData.number,
        qrCode: tableData.qrCode
      },
    });
    return table;
};


const deleteTable = async (id) => {
  await prisma.table.delete({
    where: {
      id,
    },
  });
  
};


module.exports = {

    findTable,
    insertTable,
    deleteTable,
    findTableById
    
};

