import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { TextField, Button, Typography, Container, Box } from '@mui/material';

function LoginSignUp() {
  // State variables to handle user input and registration status
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // New state for success message

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://flutter-self-stack-api.vercel.app/api/users/?apiKey=flutterbyafaf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      // Login successful
      setSuccess(true); // Set success to true
      setError(''); // Clear any previous error
      // You can also redirect here if needed
    } catch (error) {
      setError('Login failed. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          marginTop: '50px',
          border: '2px solid #12AD34',
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'black',
          fontFamily: 'Roboto, sans-serif',
        }}
        as={motion.div} // Add motion to Box
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Login Interface
        </Typography>
        {/* Display error message if login fails */}
        {error && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }}>
            <Typography color="error">{error}</Typography>
          </motion.div>
        )}
        {/* Display success message if login is successful */}
        {success && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }}>
            <Typography style={{ color: 'green', marginBottom: '10px' }}>Login successful!</Typography>
          </motion.div>
        )}
        {/* Form for logging in */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            InputLabelProps={{
              style: { color: 'white' },
            }}
            InputProps={{
              style: { border: '1px solid white', color: 'white' },
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputLabelProps={{
              style: { color: 'white' },
            }}
            InputProps={{
              style: { border: '1px solid white', color: 'white' },
            }}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            style={{ marginTop: '20px', backgroundColor: '#12AD34', color: 'white' }}
          >
            Login
          </Button>
        </motion.form>
      </Box>
    </Container>
  );
}

export default LoginSignUp;
