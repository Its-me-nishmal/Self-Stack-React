import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

function LoginSignUp() {
  // State variables to handle user input and registration status
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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
        body: JSON.stringify({ name, email, phone, password }),
      });
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      // Registration successful
      setSuccess(true); // Set success to true
      setError(''); // Clear any previous error
      // You can also redirect here if needed
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        style={{
          color: 'white',
          padding: '20px',
          borderRadius: '5px',
          marginTop: '50px',
          border: '2px solid #12AD34',
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Login / Sign Up Interface
        </Typography>
        {/* Display error message if registration fails */}
        {error && <Typography color="error">{error}</Typography>}
        {/* Display success message if registration is successful */}
        {success && <Typography style={{ color: 'green', marginBottom: '10px' }}>Registration successful!</Typography>}
        {/* Form for registering users */}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            InputLabelProps={{
              style: { color: 'white' },
            }}
            InputProps={{
              style: { border: '1px solid white', color: 'white' },
            }}
          />
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
            label="Phone"
            variant="outlined"
            fullWidth
            margin="normal"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          <Button variant="contained" type="submit" fullWidth style={{ marginTop: '20px', backgroundColor: '#12AD34', color: 'white' }}>
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default LoginSignUp;
