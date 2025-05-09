const orderRepository = require('./order.repository');

const createNewOrder = async (tableId) => {
  // Bisa ditambahkan validasi/meja tersedia
  return await orderRepository.createOrder(tableId);
};

const getOrders = async () => {
  return await orderRepository.getAllOrders();
};

const getOrderDetail = async (orderId) => {
  return await orderRepository.getOrderById(orderId);
};

const changeOrderStatus = async (orderId, newStatus) => {
  return await orderRepository.updateOrderStatus(orderId, newStatus);
};

const removeOrder = async (orderId) => {
  return await orderRepository.deleteOrder(orderId);
};

module.exports = {
  createNewOrder,
  getOrders,
  getOrderDetail,
  changeOrderStatus,
  removeOrder,
};
