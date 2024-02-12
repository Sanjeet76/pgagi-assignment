// src/components/Chatbot.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMockData();
  }, []);

  const fetchMockData = async () => {
    try {
      const response = await axios.get('http://localhost:4001/api/chat');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching mock data:', error);
    }
  };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    const userMessage = e.target.message.value;
    if (userMessage.trim() !== '') {
      const newUserMessage = { text: userMessage, sender: 'user' };
      setMessages([...messages, newUserMessage]);
      e.target.reset();
      try {
        const response = await axios.post('http://localhost:4001/api/chat', newUserMessage);
        setMessages([...messages, response.data]);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Hiring Requirements Chatbot</h2>
      <div className="flex flex-col space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit} className="mt-4">
        <input
          type="text"
          name="message"
          autoComplete="off"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="mt-2 inline-block px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;
