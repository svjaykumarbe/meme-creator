import React, { useState } from 'react';
import { TextField, Button, Typography, CircularProgress, Box } from '@mui/material';
import { generateCaption } from '../utils/openai'; // AI function

const MemeCaptionGenerator = () => {
  const [keyword, setKeyword] = useState('');
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const aiCaption = await generateCaption(keyword);
    setCaption(aiCaption);
    setLoading(false);
  };

  return (
    <Box sx={{ p: 2, maxWidth: 500, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>AI Meme Caption Generator</Typography>
      <TextField
        label="Enter a keyword"
        fullWidth
        variant="outlined"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerate}
        disabled={!keyword || loading}
      >
        {loading ? <CircularProgress size={24} /> : 'Generate Caption'}
      </Button>
      {caption && (
        <Typography variant="h6" sx={{ mt: 3 }}>
          Caption: {caption}
        </Typography>
      )}
    </Box>
  );
};

export default MemeCaptionGenerator;