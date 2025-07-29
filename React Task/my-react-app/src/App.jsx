import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import SecondNav from './pages/SecondNav.jsx';
import Innovation from './pages/Innovation.jsx';
import Solutions from './pages/Solutions.jsx';
import Blogs from './pages/Blogs.jsx';
import Analytics from './pages/Analytics.jsx';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <Navbar />
      <Home />
      <SecondNav />
      <Innovation />
      <Solutions />
      <Blogs />
      <Analytics />
    </div>
  );
};

export default App;
