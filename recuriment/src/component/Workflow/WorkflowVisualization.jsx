import React, { useState, useEffect } from 'react';
import axios from 'axios';


const WorkflowVisualization = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetchSteps();

  }, []);

  const fetchSteps = async () => {
    try {

      const response = await axios.get('http://localhost:4001/api/steps');
      setSteps(response.data || []); 

    } catch (error) {
      console.error('Error fetching steps:', error);
    }
  };

  return (
    <div className="agent-workflow">
      <h1 className="text-2xl font-bold mb-4">Agent Workflow Visualization</h1>
      {steps.map((step, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-700">{step.description}</p>
          <div className="bg-gray-200 rounded-md p-2 mt-2">{step.update}</div>
        </div>
      ))}
    </div>
  );
};

export default WorkflowVisualization;
