import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Resources from './components/Resources';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="antialiased text-slate-800 selection:bg-purple-200 selection:text-purple-900">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
