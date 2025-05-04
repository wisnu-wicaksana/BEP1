const prisma = require("../db");

const findTable = async () => {
    const table = await prisma.table.findMany();
  
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





module.exports = {

    findTable,
    insertTable
};

