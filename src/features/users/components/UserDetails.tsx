import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import MySpinner from "../../../common/components/MySpinner";
import {Avatar, Box, Typography} from "@mui/material";
import MyButton from "../../../common/components/MyButton";
import {usersApi} from "../store/api";
import {getMyDate} from "../../../common/utils/date";

const UserDetails = () => {
  const navigate = useNavigate()
  const {fullName} = useParams<{fullName: string }>();
  const {data: user, isLoading, isFetching} = usersApi.useGetUserByNameQuery({name: `${fullName}`}, {refetchOnMountOrArgChange: true})

  if(!user || isLoading || isFetching) {
    return <MySpinner/>
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      alignItems: 'center',
      justifyContent: 'center',
      width: '600px',
      maxWidth: '90%',
      margin: '0 auto'
    }}>
      <Typography variant="h3" sx={{marginTop: '20px'}}>{user.name}</Typography>
      <Avatar src={user.avatar_url} sx={{marginRight: '16px', height: '100px', width: '100px'}}/>
      <Typography paragraph><strong>{user.company}</strong></Typography>
      <Typography paragraph>Created: <strong>{getMyDate(user.created_at)}</strong></Typography>
      <Typography paragraph>Updated: <strong>{getMyDate(user.updated_at)}</strong></Typography>
      <Typography paragraph>Location: <strong>{user.location}</strong></Typography>
      <Typography paragraph>Public repositories: <strong>{user.public_repos}</strong></Typography>
      <MyButton title={'Go back'} onClickCb={() => navigate(-1)}/>
    </Box>
  );
};

export default UserDetails;
