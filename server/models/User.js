const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobileNo: { type: String },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country: { type: String },
  fullAddress: { type: String },
  profilePhoto: { type: String }
});

module.exports = mongoose.model('User', userSchema);
