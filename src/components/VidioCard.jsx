import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle, demoThumbnailUrl } from '../utils/constants';
import '../index.css';

export const VidioCard = ({ vidio }) => {
  const { id, snippet } = vidio;
  
  // Extract the videoId from the id object
  const videoId = id?.videoId;
  console.log(vidio)
  return (
    <Card  sx={{ width: {xs:'100%',md:'320px',sm:'358px'}, boxShadow: 'none', borderRadius: 3, backgroundColor: '#202020' }}>
      {/* Use videoId to create the link */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img" // Use component="img" to show an image directly
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} // Use demo thumbnail URL if real thumbnail is not available
          alt={snippet?.title}
          sx={{ width: '100%', height: 'auto', aspectRatio: '16/9', objectFit: 'cover' }} // Set height and objectFit for better thumbnail display
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#202020', height: '100px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight="bold" color='#FFF'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight="bold" color='gray'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};


