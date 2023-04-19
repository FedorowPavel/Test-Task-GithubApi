import React from 'react';
import {MoonLoader} from "react-spinners";
import {Box} from "@mui/material";

const MySpinner = () => {
  return (
    <Box sx={{
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <MoonLoader speedMultiplier={0.5}/>
    </Box>
  );
};

export default MySpinner;
