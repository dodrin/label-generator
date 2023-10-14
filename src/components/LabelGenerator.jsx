import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/LabelGenerator.scss";

const LabelGenerator = ({ onGenerateLabels }) => {
  const navigate = useNavigate(); // Get the navigate function

  const [start, setStart] = useState(30400);
  const [end, setEnd] = useState(30400);

  const handleStartChange = (e) => {
    setStart(parseInt(e.target.value));
  };

  const handleEndChange = (e) => {
    setEnd(parseInt(e.target.value));
  };

  const generateLabels = () => {
    const newLabels = [];
    for (let i = start; i <= end; i++) {
      newLabels.push(i);
    }
    onGenerateLabels(newLabels); // Call the callback to set labels in App
    navigate('/labels'); // Navigate to the /labels route after generating labels
  };

  return (
    <div className='label-generator'>
      <h1>Label Generator</h1>
      <div className='label-generator-inputs'>
        <div>
          <label>Start SKU Number: </label>
          <input type="number" value={start} onChange={handleStartChange} />
        </div>
        <div>
          <label>End SKU Number: </label>
          <input type="number" value={end} onChange={handleEndChange} />
        </div>
        <button onClick={generateLabels}>Generate Labels</button>
      </div>
      
    </div>
  );
};

export default LabelGenerator;
