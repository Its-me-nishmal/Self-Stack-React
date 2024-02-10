// SplashScreen.js
import React from 'react';

function SplashScreen({ logo }) {
  return (
    <div className="SplashScreen">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Loading...</p>
    </div>
  );
}

export default SplashScreen;
