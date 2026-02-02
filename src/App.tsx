import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { CaseStudy1 } from './components/CaseStudy1';
import { CaseStudy2 } from './components/CaseStudy2';
import { CaseStudy3 } from './components/CaseStudy3';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case1" element={<CaseStudy1 />} />
        <Route path="/case2" element={<CaseStudy2 />} />
        <Route path="/case3" element={<CaseStudy3 />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}