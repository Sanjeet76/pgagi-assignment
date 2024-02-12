const express = require('express');
const router = express.Router();


router.post('/chat', (req, res) => {
  const userMessage = req.body.message;
  
  const botResponse = { text: `You said: ${userMessage.text}`, sender: 'bot' };
  res.json(botResponse);
});

router.get('/mockdata', (req, res) => {
    res.json(mockData);
  });

module.exports = router;
