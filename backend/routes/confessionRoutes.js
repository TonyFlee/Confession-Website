const express = require('express');
const { createConfession, getAllConfessions } = require('../controllers/confessionController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createConfession);
router.get('/', getAllConfessions);

module.exports = router;
