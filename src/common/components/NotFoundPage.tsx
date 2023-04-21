import {Box, Link, Typography} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import ErrorIcon from '@mui/icons-material/Error';

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '100px',
      gap: '40px'
    }}>
      <ErrorIcon sx={{height: '100px', width: '100px'}}/>
      <Typography variant={'h5'}>
        This page does not exist
      </Typography>
      <Typography variant={'h5'}>
        Go to <Link onClick={() => navigate('/')}>welcome page</Link>
      </Typography>
    </Box>
  );
}
