const  prisma  = require('../db');

const createOrder = async (tableId, status = 'pending') => {
  return await prisma.order.create({
    data: {
      tableId,
      status,
    },
  });
};

const getAllOrders = async () => {
  return await prisma.order.findMany({
    include: {
      table: true,
      orderItems: true,
    },
  });
};

const getOrderById = async (id) => {
  return await prisma.order.findUnique({
    where: { id },
    include: {
      table: true,
      orderItems: true,
    },
  });
};

const updateOrderStatus = async (id, status) => {
  return await prisma.order.update({
    where: { id },
    data: { status },
  });
};

const deleteOrder = async (id) => {
  return await prisma.order.delete({
    where: { id },
  });
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
};


