import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const SocialShare = ({ imageUrl, caption = '' }) => {
  const shareToSocial = (platform) => {
    const encodedUrl = encodeURIComponent(imageUrl);
    const encodedCaption = encodeURIComponent(caption);

    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedCaption}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        '_blank'
      );
    } else if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodedCaption}%20${encodedUrl}`, '_blank');
    } else {
      console.error('Unsupported platform');
    }
  };

  return (
    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h6" gutterBottom>
        Share Your Meme
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => shareToSocial('facebook')}
        >
          Share on Facebook
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => shareToSocial('twitter')}
        >
          Share on Twitter
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: '#0A66C2', color: 'white' }}
          onClick={() => shareToSocial('linkedin')}
        >
          Share on LinkedIn
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: '#25D366', color: 'white' }}
          onClick={() => shareToSocial('whatsapp')}
        >
          Share on WhatsApp
        </Button>
      </Box>
    </Box>
  );
};

export default SocialShare;