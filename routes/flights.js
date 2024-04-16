const express = require('express');
const router = express.Router();

// Flight model
const Flight = require('../models/Flight');

// @route   GET /flights
// @desc    Get all flights
// @access  Public
router.get('/', async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;