import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxSx() {
  return (
    <div>
        <Box
        sx={{
            width: 300,
            height: 300,
            margin: 2,
            borderRadius: 5,
            backgroundColor: 'primary.dark',
            '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
            },
        }}
        />
        <Box
        sx={{
            width: 300,
            height: 150,
            margin: 2,
            borderRadius: 2,
            backgroundColor: 'primary.dark',
            '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
            },
        }}
        />
        <Box
        sx={{
            width: 300,
            height: 300,
            margin: 2,
            borderRadius: 2,
            backgroundColor: 'primary.dark',
            '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
            },
        }}
        />
    </div>
  );
}