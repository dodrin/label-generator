// LabelPage.js
import React from 'react';
import "../styles/LabelPage.scss"

const LabelPage = ({ labels }) => {
  return (
    <div className='label-page'>
      <ul>
        {labels.map((label) => (
          <li key={label}><span>{label}</span></li>
        ))}
      </ul>
    </div>
  );
};

export default LabelPage;
