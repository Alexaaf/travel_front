import './App.css';
import React from "react";
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import DestinationsPage from './pages/DestinationsPage';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import LoginPage from './components/loginPage';
import RegisterPage from './components/register';
import AgentPage from './pages/AgentPage';

export default function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/agent_page" element={<AgentPage />} />
      </Routes>
    </Router>
  );
}