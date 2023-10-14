import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/LabelGenerator.scss";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const LabelGenerator = ({ onGenerateLabels }) => {
  const navigate = useNavigate(); // Get the navigate function

  const [start, setStart] = useState(30500);
  const [end, setEnd] = useState(30501);

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
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Start SKU" variant="outlined" value={start} onChange={handleStartChange}/>
          <TextField id="outlined-basic" label="End SKU" variant="outlined" value={end} onChange={handleEndChange}/>
        </Box>
        
        <Button variant="contained" onClick={generateLabels}>Generate</Button>
      </div>
      
    </div>
  );
};

export default LabelGenerator;
