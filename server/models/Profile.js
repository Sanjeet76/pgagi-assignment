
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  industry: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
