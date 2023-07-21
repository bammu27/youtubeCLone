import { Stack, Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Vidios } from './Vidios';

export const Feed = () => {
  const [vidiocategory, setVidiocategory] = useState('New');
  const [vidios, Setvidios] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${vidiocategory}`).then((data) => {
      Setvidios(data.items); // Use data.items to extract the array of videos
    });
  }, [vidiocategory]);

  const changecategory = (newcategory) => {
    setVidiocategory(newcategory);
  };

  return (
    <Stack direction={{ sm: 'row', xs: 'column' }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar changecategory={changecategory} />
        <Typography variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
          Copyright © 2022 JSM Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          {vidiocategory} <span style={{ color: '#FC1503' }}>Videos</span>
        </Typography>
        <Vidios vidios={vidios} />
      </Box>
    </Stack>
  );
};
