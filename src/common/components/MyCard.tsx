import React from 'react';
import {Avatar, Box, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {RepoOwner, Repository} from "../types";
import MyAddToAnalyticsBtn from "./MyAddToAnalyticsBtn";

const MyCard: React.FC<{repository?: Repository, user?: RepoOwner}> = ({repository, user= {} as RepoOwner}) => {
  const navigate = useNavigate()

  return (
    <Box sx={{
      backgroundColor: 'whitesmoke',
      borderRadius: '12px',
      boxShadow: '2px 2px 5px grey',
      padding: '26px',
      marginBottom: '20px',
      cursor: 'pointer',
      boxSizing: 'border-box',
      maxWidth: '100%',
      transition: '0.3s',
      position: 'relative',

      '&:hover': {
        backgroundColor: '#ececec',
      }
    }}
      onClick={() => navigate(repository ? repository.full_name : user.login)}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <Avatar src={repository ? repository.owner.avatar_url : user.avatar_url} sx={{marginRight: '16px'}}/>
        <Typography variant="h6">{repository ? repository.owner.login : user.type}</Typography>
      </Box>
      <Typography variant="h4">{repository ? repository.name : null}</Typography>
      <Typography paragraph sx={{marginBottom: '0px'}}>{repository ? repository.description : user.login}</Typography>
      {repository ? <MyAddToAnalyticsBtn repoFullName={repository.full_name}/> : null}
    </Box>
  );
};

export default MyCard;
