import React, { useState } from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import MemeEditor from '../components/MemeEditor';
import MemeCaptionGenerator from '../components/MemeCaptionGenerator';
import SocialShare from '../components/SocialShare';

const MemeCreator = () => {
  // State to manage meme image and caption
  const [memeImageUrl, setMemeImageUrl] = useState('');
  const [memeCaption, setMemeCaption] = useState('');

  // Callback to handle image updates from MemeEditor
  const handleImageUpdate = (url) => {
    setMemeImageUrl(url);
  };

  // Callback to handle caption updates from MemeCaptionGenerator
  const handleCaptionUpdate = (caption) => {
    setMemeCaption(caption);
  };

  // Clear Meme
  const handleClearMeme = () => {
    setMemeImageUrl('');
    setMemeCaption('');
  };

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 4 },
        maxWidth: 900,
        mx: 'auto',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Meme Creator
      </Typography>
      <Divider sx={{ mb: 4 }} />

      {/* Meme Caption Generator */}
      <MemeCaptionGenerator onCaptionGenerated={handleCaptionUpdate} />
      <Divider sx={{ my: 4 }} />

      {/* Meme Editor */}
      <MemeEditor onImageGenerated={handleImageUpdate} caption={memeCaption} />
      <Divider sx={{ my: 4 }} />

      {/* Social Share */}
      {!memeImageUrl || !memeCaption ? (
        <Typography variant="body1" align="center" sx={{ mt: 4 }}>
          Complete your meme to enable sharing options.
        </Typography>
      ) : (
        <SocialShare imageUrl={memeImageUrl} caption={memeCaption} />
      )}

      {/* Clear Meme Button */}
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleClearMeme}
        sx={{ mt: 2 }}
      >
        Clear Meme
      </Button>
    </Box>
  );
};

export default MemeCreator;