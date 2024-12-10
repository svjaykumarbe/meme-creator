import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { shareToPlatform } from '../utils/socialShareUtils';

const SocialShare = ({ imageUrl, caption }) => {
  return (
    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h6" gutterBottom>
        Share Your Meme
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => shareToPlatform(imageUrl, 'facebook')}
        >
          Share on Facebook
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => shareToPlatform(imageUrl, 'twitter', caption)}
        >
          Share on Twitter
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: '#0A66C2', color: 'white' }}
          onClick={() => shareToPlatform(imageUrl, 'linkedin')}
        >
          Share on LinkedIn
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: '#25D366', color: 'white' }}
          onClick={() => shareToPlatform(imageUrl, 'whatsapp', caption)}
        >
          Share on WhatsApp
        </Button>
      </Box>
    </Box>
  );
};

export default SocialShare;