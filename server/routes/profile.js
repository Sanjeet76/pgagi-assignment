// server/routes/profile.js
const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

router.post('/profile', async (req, res) => {
  try {
    const { companyName, industry, location, description } = req.body;
    
    const profile = new Profile({
      companyName,
      industry,
      location,
      description
    });
    
    await profile.save();
    res.status(201).json({ message: 'Profile created successfully' });
  } catch (err) {
    console.error('Error saving profile:', err);
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/companies', async (req, res) => {
    try {
      const companies = await Profile.find();
      res.json(companies);
    } catch (err) {
      console.error('Error fetching companies:', err);
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;
