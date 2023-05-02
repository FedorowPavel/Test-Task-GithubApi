import React from 'react';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import {Box, Link, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

function EmptyPlug() {
  const navigate = useNavigate();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '100px',
      gap: '40px',
    }}
    >
      <QueryStatsIcon sx={{height: '100px', width: '100px'}} />
      <Typography variant="h5">
        To see charts, please add repositories on
        {' '}
        <Link onClick={() => navigate('/repositories')}>this page</Link>
      </Typography>
    </Box>
  );
}

export default EmptyPlug;
