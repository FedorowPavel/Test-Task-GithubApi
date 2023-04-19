import React from 'react';
import {Button} from "@mui/material";

interface ButtonProps {
  onClickCb: () => void,
  variant?: 'outlined' | 'contained',
  title: string
}

const MyButton: React.FC<ButtonProps> = ({onClickCb, variant = 'contained', title}) => {
  return (
    <Button
      onClick={onClickCb}
      variant={variant}
      sx={{
        backgroundColor: '#1f1f1f',
        '&:hover': {
          backgroundColor: '#3D3D3DFF'
        }
      }}>
      {title}
    </Button>
  );
};

export default MyButton;
