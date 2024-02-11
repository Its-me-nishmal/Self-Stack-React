import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import LoginSignUp from './components/LoginSignUp';
import Login from './components/login'
import Signup from './components/signup'
import logo from './assets/logo.png';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={showSplash ? <SplashScreen logo={logo} /> : <LoginSignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
