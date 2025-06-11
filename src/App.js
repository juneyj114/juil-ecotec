import React from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DirectionsPage from './pages/DirectionsPage'; // 새로 만든 오시는길 페이지 import
import HistoryPage from './pages/HistoryPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/directions" element={<DirectionsPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;