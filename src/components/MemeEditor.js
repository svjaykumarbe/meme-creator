import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { toPng } from 'html-to-image';

const MemeEditor = () => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeImage, setMemeImage] = useState(null);
  const [fontSize, setFontSize] = useState(24);

  const saveMeme = async () => {
    try {
      const memeElement = document.getElementById('meme');
      if (memeElement) {
        const dataUrl = await toPng(memeElement);
        const link = document.createElement('a');
        link.download = 'meme.png';
        link.href = dataUrl;
        link.click();
      } else {
        alert('Meme element not found!');
      }
    } catch (error) {
      console.error('Error generating meme:', error);
      alert('Failed to generate meme. Please try again.');
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>Create Your Meme</Typography>
      <Button
        variant="contained"
        component="label"
        sx={{ mt: 2, mb: 2 }}
      >
        Upload Meme Template
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = () => setMemeImage(reader.result);
              reader.readAsDataURL(file);
            }
          }}
        />
      </Button>
      <Box
        id="meme"
        sx={{
          width: '100%',
          maxWidth: 400,
          height: 'auto',
          aspectRatio: '1/1',
          border: '2px dashed gray',
          backgroundColor: '#f0f0f0',
          position: 'relative',
          mb: 2,
          mx: 'auto',
        }}
      >
        {memeImage ? (
          <img src={memeImage} alt="Meme" style={{ width: '100%', height: '100%' }} />
        ) : (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              color: 'gray',
              fontSize: '1.2rem',
            }}
          >
            Upload a Meme Template
          </Box>
        )}
        <Typography
          sx={{
            position: 'absolute',
            top: '10%',
            width: '100%',
            textAlign: 'center',
            color: 'white',
            fontSize: `${fontSize}px`,
            fontWeight: 'bold',
            textShadow: '2px 2px black',
            px: 1,
          }}
        >
          {topText}
        </Typography>
        <Typography
          sx={{
            position: 'absolute',
            bottom: '10%',
            width: '100%',
            textAlign: 'center',
            color: 'white',
            fontSize: `${fontSize}px`,
            fontWeight: 'bold',
            textShadow: '2px 2px black',
            px: 1,
          }}
        >
          {bottomText}
        </Typography>
      </Box>
      <TextField
        label="Top Text"
        fullWidth
        variant="outlined"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Bottom Text"
        fullWidth
        variant="outlined"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Font Size"
        type="number"
        fullWidth
        variant="outlined"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={saveMeme}>
        Download Meme
      </Button>
    </Box>
  );
};

export default MemeEditor;