/**
 * Opens a new window for social sharing on the specified platform.
 *
 * @param {string} url - The URL to be shared.
 * @param {string} platform - The name of the social platform (facebook, twitter, linkedin, whatsapp).
 * @param {string} caption - Optional caption for sharing (used for platforms like Twitter or WhatsApp).
 */
export const shareToPlatform = (url, platform, caption = '') => {
    const encodedUrl = encodeURIComponent(url);
    const encodedCaption = encodeURIComponent(caption);
  
    let shareUrl = '';
  
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedCaption}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodedCaption}%20${encodedUrl}`;
        break;
      default:
        console.error('Unsupported platform');
        return;
    }
  
    window.open(shareUrl, '_blank');
  };  