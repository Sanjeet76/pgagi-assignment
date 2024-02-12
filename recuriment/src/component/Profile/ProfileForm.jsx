import React, { useState } from 'react';

const ProfileForm = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    location: '',
    description: ''
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4001/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Profile created successfully');
        alert("profile created successfully");
        setFormData({
          companyName: '',
          industry: '',
          location: '',
          description: ''
        });
      } else {
        console.error('Failed to create profile');
        alert("profile created successfully");
      }
    } catch (err) {
      console.error('Error creating profile:', err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Profile Creation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
          <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry</label>
          <input type="text" id="industry" name="industry" value={formData.industry} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="3" className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"></textarea>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
