import {Box} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import MyButton from '../../../common/components/MyButton';

function Welcome() {
  const navigate = useNavigate();

  return (
    <Box sx={{
      height: '100',
      display: 'flex',
      flexGrow: '1',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '200px',
    }}
    >
      <h1>This app based on GitHub Api</h1>
      <h3>Here you can find detailed info about:</h3>
      <Box sx={{
        display: 'flex',
        gap: '20px',
        marginTop: '20px',
      }}
      >
        <MyButton onClickCb={() => navigate('repositories')} title="repositories" />
        <MyButton onClickCb={() => navigate('users')} title="users" />
      </Box>
    </Box>
  );
}

export default Welcome;
