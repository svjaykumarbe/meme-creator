// HomeEditor.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const HomeEditor = () => {
  const [textInput, setTextInput] = useState('');
  const [image, setImage] = useState(null);

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ p: 2, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Home Editor
      </Typography>

      <TextField
        label="Enter Text"
        fullWidth
        variant="outlined"
        value={textInput}
        onChange={handleTextChange}
        sx={{ mb: 2 }}
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ marginBottom: '16px' }}
      />

      {image && (
        <Box sx={{ mt: 2 }}>
          <img src={image} alt="Uploaded" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
        </Box>
      )}

      <Button
        variant="contained"
        color="primary"
        disabled={!textInput && !image}
        sx={{ mt: 3 }}
      >
        Generate Meme
      </Button>
    </Box>
  );
};

export default HomeEditor; // Make sure the component is exported correctly