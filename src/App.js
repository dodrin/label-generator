import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import LabelGenerator from './components/LabelGenerator';
import LabelPage from './components/LabelPage';

function App() {
  const [labels, setLabels] = useState([]);

  return (
    
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Generate SKU Labels</Link>
            </li>
            <li>
              <Link to="/labels">Display SKU Labels</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<LabelGenerator onGenerateLabels={setLabels} />} />
          <Route path="/labels" element={<LabelPage labels={labels} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
