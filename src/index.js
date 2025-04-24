import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Events from './pages/Events';
import Testimonials from './pages/Testimonials';
import FormSubmitted from './pages/FormSubmitted';
import FeedbackSubmitted from './pages/FeedbackSubmitted';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/events" element={<Events />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/formsubmitted" element={<FormSubmitted />} />
        <Route path="/feedbacksubmitted" element={<FeedbackSubmitted />} />
      </Routes>
    </Router>
  </React.StrictMode>
);