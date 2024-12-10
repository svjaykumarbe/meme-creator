import React, { useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import MemeEditor from '../components/MemeEditor';
import MemeCaptionGenerator from '../components/MemeCaptionGenerator';
import SocialShare from '../components/SocialShare';

const MemeCreatorPage = () => {
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

  return (
    <Box sx={{ p: 4, maxWidth: 900, mx: 'auto' }}>
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
      {memeImageUrl && (
        <SocialShare imageUrl={memeImageUrl} caption={memeCaption} />
      )}
    </Box>
  );
};

export default MemeCreatorPage;