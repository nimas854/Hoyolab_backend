const express = require('express');
const router = express.Router();

// ...existing post and draft routes...

// Placeholder for image upload endpoint
router.post('/image', (req, res) => {
    res.status(201).json({ message: 'Image endpoint hit' });
});

// Placeholder for video upload endpoint
router.post('/video', (req, res) => {
    res.status(201).json({ message: 'Video endpoint hit' });
});

module.exports = router;
