import React, { useState, useEffect } from 'react';

const Home = () => {
  const [companies, setCompanies] = useState([]);

  // Function to fetch the list of companies from the backend
  const fetchCompanies = async () => {
    try {
      const response = await fetch('http://localhost:4001/api/companies');
      if (response.ok) {
        const data = await response.json();
        setCompanies(data);
      } else {
        console.error('Failed to fetch companies');
      }
    } catch (err) {
      console.error('Error fetching companies:', err);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">List of Companies</h2>
      <div className="grid grid-cols-3 gap-4">
        {companies.map(company => (
          <div key={company._id} className="border border-gray-300 rounded p-4">
            <h3 className="text-xl font-semibold">{company.companyName}</h3>
            <p className="text-gray-600">Industry: {company.industry}</p>
            <p className="text-gray-600">Location: {company.location}</p>
            <p className="text-gray-600">Description: {company.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
