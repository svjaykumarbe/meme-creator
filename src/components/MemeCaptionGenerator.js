import React, { useState } from 'react';
import { TextField, Button, Typography, CircularProgress, Box } from '@mui/material';
import { generateMemeCaption } from '../utils/openai';

const MemeCaptionGenerator = () => {
  const [keyword, setKeyword] = useState('');
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!keyword.trim()) {
      setError('Please enter a valid keyword.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const aiCaption = await generateMemeCaption(keyword);
      setCaption(aiCaption);
    } catch (err) {
      console.error('Error generating caption:', err);
      setError('Failed to generate caption. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        p: 2,
        maxWidth: 500,
        mx: 'auto',
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
      }}
    >
      <Typography variant="h5" gutterBottom>
        AI Meme Caption Generator
      </Typography>
      <TextField
        label="Enter a keyword"
        fullWidth
        variant="outlined"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        sx={{ mb: 2 }}
        error={!!error}
        helperText={error}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerate}
        disabled={!keyword || loading}
      >
        Generate Caption
      </Button>
      {loading && <CircularProgress size={24} sx={{ ml: 2, mt: 2 }} />}
      {!caption && !loading && !error && (
        <Typography variant="body1" color="textSecondary" sx={{ mt: 3 }}>
          Your caption will appear here after generation.
        </Typography>
      )}
      {caption && (
        <Typography variant="h6" sx={{ mt: 3 }} aria-live="polite">
          Caption: {caption}
        </Typography>
      )}
    </Box>
  );
};

export default MemeCaptionGenerator;