import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Section1 from './section1';
import Section2 from './section2';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />


        <Routes>
          <Route path="/" element={<Section1 />} />
          <Route path="/menu" element={<Section2 />} />
          <Route path="/about-us" element={<Section2 />} />
          <Route path="/photos" element={<Section2 />} />
          <Route path="/contact" element={<Section2 />} />
          <Route path="/privacy" element={<Section2 />} />
          <Route path="/menu" element={<Section2 />} />
          {/* Dodaj pozostałe ścieżki dla innych sekcji */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
        <Section2 />
      </div>
    </Router>
  );
}

export default App;
