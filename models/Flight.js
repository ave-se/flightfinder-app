const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true,
  },
  flightNumber: {
    type: String,
    required: true,
  },
  departure: {
    type: String,
    required: true,
  },
  arrival: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // Add more fields as needed
});

const Flight = mongoose.model('Flight', FlightSchema);

module.exports = Flight;