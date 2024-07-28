const express = require('express');
const { getItems, getItemDetails, addComment, addRating } = require('../controllers/userController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/items', getItems);
router.get('/items/:id', getItemDetails);
router.post('/items/:id/comments', authMiddleware, addComment);
router.post('/items/:id/ratings', authMiddleware, addRating);

module.exports = router;
