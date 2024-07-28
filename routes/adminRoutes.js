const express = require('express');
const { login, createItem, getItems } = require('../controllers/adminController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/login', login);
router.post('/items', authMiddleware, adminMiddleware, createItem);
router.get('/items', authMiddleware, adminMiddleware, getItems);

// Similarly, add routes for updateItem and deleteItem

module.exports = router;
