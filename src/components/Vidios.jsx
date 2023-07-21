import React from 'react'
import { Stack,Box } from '@mui/material'
import {VidioCard} from './VidioCard'
import { ChannelCard } from './ChannelCard'
import '../index.css';
import { ChannelDetail } from './ChannelDetail';

import { Grid } from '@mui/material';
// ... (other imports)

export const Vidios = ({ vidios ,direction}) => {
   

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
    {vidios.map((item, idx) => (
      <Box key={idx}>
        {item.id.videoId && <VidioCard vidio={item} /> }
        {item.id.channelId && <ChannelCard channelDetail={item} />}
      </Box>
    ))}
  </Stack>


  );
};

  