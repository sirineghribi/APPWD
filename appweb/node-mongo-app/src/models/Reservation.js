const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  voyage: { type: Number, required: true },
  user: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now ,},
  etat: { type: Boolean,required: true,default:false},
  // Add more fields as needed
});

const User = mongoose.model('Reservation', userSchema);

module.exports = User;