import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

export const Sidebar = ({ changecategory }) => {
  const [selectedcategory, setSelectedCategory] = useState('New');

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category, index) => (
        <button
          key={category.name}
          className="category-btn"
          style={{
            backgroundColor: category.name === selectedcategory ? '#FC1503' : 'transparent',
            color: 'white',
          }}
          onClick={() => {
            setSelectedCategory(category.name);
            changecategory(category.name); // Pass category.name directly here
          }}
        >
          <span style={{
            color: category.name !== selectedcategory ? '#FC1503' : 'white',
          }}>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};


