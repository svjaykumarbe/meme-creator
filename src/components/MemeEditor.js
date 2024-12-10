import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import htmlToImage from 'html-to-image';

const MemeEditor = () => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeImage, setMemeImage] = useState(null);

  const saveMeme = () => {
    htmlToImage.toPng(document.getElementById('meme')).then((dataUrl) => {
      const link = document.createElement('a');
      link.download = 'meme.png';
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>Create Your Meme</Typography>
      <Box
        id="meme"
        sx={{
          width: 400,
          height: 400,
          border: '1px solid black',
          position: 'relative',
          mb: 2,
          mx: 'auto',
        }}
      >
        {memeImage ? (
          <img src={memeImage} alt="Meme" style={{ width: '100%', height: '100%' }} />
        ) : (
          <Typography>Upload a Meme Template</Typography>
        )}
        <Typography
          sx={{
            position: 'absolute',
            top: '10%',
            width: '100%',
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            textShadow: '1px 1px black',
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
            fontWeight: 'bold',
            textShadow: '1px 1px black',
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
      <Button variant="contained" color="primary" onClick={saveMeme}>
        Download Meme
      </Button>
    </Box>
  );
};

export default MemeEditor;