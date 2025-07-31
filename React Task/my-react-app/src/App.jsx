import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import SecondNav from './pages/SecondNav.jsx';
import Innovation from './pages/Innovation.jsx';
import Solutions from './pages/Solutions.jsx';
import Blogs from './pages/Blogs.jsx';
import Analytics from './pages/Analytics.jsx';
import FAQ from './pages/FAQ.jsx';
import Footer from './pages/Footer.jsx';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <button
        onClick={toggleDarkMode}
        style={{
          position: 'relative',
          top: '0px',
          right: '0px',
          padding: '10px 20px',
          backgroundColor: isDarkMode ? '#ffffff' : '#1e1e1e',
          color: isDarkMode ? '#1e1e1e' : '#ffffff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>


      <Navbar isDarkMode={isDarkMode} />
      <Home />
      <SecondNav />
      <Innovation />
      <Solutions />
      <Blogs />
      <Analytics />
      <FAQ />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
