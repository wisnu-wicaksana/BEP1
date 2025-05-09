const express = require('express');
const router = express.Router();
const orderController = require('../order/order.controller');

// Dapatkan semua pesanan
router.get('/', orderController.getAllOrders);

// Dapatkan pesanan berdasarkan ID
router.get('/:id', orderController.getOrderById);

// Buat pesanan baru
router.post('/', orderController.createOrder);

// Update status pesanan
router.put('/:id', orderController.updateOrderStatus);

// Hapus pesanan
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
