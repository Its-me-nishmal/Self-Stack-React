import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/loading.json'; // Replace 'loadingAnimation.json' with the path to your JSON file

function SplashScreen({ logo }) {
  // Configuration options for the Lottie animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="SplashScreen">
      <img src={logo} className="App-logo" alt="logo" />
      <Lottie options={defaultOptions} height={150} width={200} />
    </div>
  );
}

export default SplashScreen;
