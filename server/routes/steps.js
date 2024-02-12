// routes/steps.js
const express = require('express');
const router = express.Router();

const mockSteps = [
  { title: 'AR Start', description: 'Description of AR Start step', update: 'Update for AR Start' },
  { title: 'Sourcing', description: 'Description of Sourcing step', update: 'Update for Sourcing' },
  // Add more steps as needed
];

router.get('/steps', (req, res) => {
  res.json(mockSteps);
});

module.exports = router;
