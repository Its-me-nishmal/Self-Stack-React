import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import { Button, Container, Typography, Box } from '@mui/material';
import Lottie from 'react-lottie';
import animationData from '../assets/home.json'; // Replace './animation.json' with the path to your Lottie animation JSON file

function LoginSignUpPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          backgroundColor: 'black',
          padding: '20px',
          borderRadius: '10px',
          marginTop: '50px',
          border: '1px solid #12AD34',
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom style={{ color: 'white', fontFamily: 'Roboto, sans-serif' }}>
          Welcome to Self-Stack
        </Typography>
        <Box mt={4} mb={1}>
          <Lottie options={defaultOptions} height={200} width={200} />
        </Box>
        <Box mt={2} mb={1}>
        <Typography variant="p" align="center" gutterBottom style={{ color: 'white', fontFamily: 'Roboto, sans-serif' }}>
          Start Your Journey
        </Typography>
        </Box>
        
        <Button
          variant="contained"
          component={Link}
          to="/login"
          style={{
            marginRight: '10px',
            backgroundColor: '#12AD34',
            color: 'white',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          component={Link}
          to="/signup"
          style={{
            backgroundColor: '#12AD34',
            color: 'white',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
}

export default LoginSignUpPage;
