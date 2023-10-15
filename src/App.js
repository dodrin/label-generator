import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import "./App.scss";

import LabelGenerator from './components/LabelGenerator';
import LabelPage from './components/LabelPage';
import "./styles/Print.scss";

function App() {
  const [labels, setLabels] = useState([]);
  return (
    <Router>
      <div>
        <nav className='nav-bar'>
          <ul>
            <li>
              <Link to="/label-generator">Generate SKU Labels</Link>
            </li>
            {/* <li>
              <Link to="/label-generator/labels">Display SKU Labels</Link>
            </li> */}
          </ul>
        </nav>

        <Routes>
          <Route path="/label-generator" element={<LabelGenerator onGenerateLabels={setLabels} />} />
          <Route path="/label-generator/labels" element={<LabelPage labels={labels} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
