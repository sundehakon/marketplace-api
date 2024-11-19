const express = require('express');
const router = express.Router();

// Example Route
router.get('/example', (req, res) => {
    res.json({ message: 'This is an example route' });
});

module.exports = router;
