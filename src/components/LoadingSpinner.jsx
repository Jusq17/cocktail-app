import React from 'react'
import { CircularProgress, Typography, Box } from '@mui/material'

const LoadingSpinner = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
    <CircularProgress sx={{ mr: 2 }} />
    <Typography sx={{ fontSize: 17, fontFamily: 'Trebuchet MS, sans-serif', color: '#00011b' }}>Loading...</Typography>
  </Box>
)

export default LoadingSpinner