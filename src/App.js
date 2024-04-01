import './App.css';
import React from "react";
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import DestinationsPage from './pages/DestinationsPage';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';

export default function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
      </Routes>
    </Router>
  );
}