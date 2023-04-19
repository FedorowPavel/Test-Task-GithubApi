import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {repositoriesApi} from "../store/api";
import {Avatar, Box, Typography} from "@mui/material";
import MySpinner from "../../../common/components/MySpinner";
import MyButton from "../../../common/components/MyButton";
import {getMyDate} from "../../../common/utils/date";

const RepositoryDetails = () => {
  const navigate = useNavigate()
  const {fullName1, fullName2} = useParams<{fullName1: string, fullName2: string }>();
  const {data, isLoading, isFetching} = repositoriesApi.useGetRepositoryByFullNameQuery({fullname: `${fullName1}/${fullName2}`}, {refetchOnMountOrArgChange: true})

  if(!data || isLoading || isFetching) {
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
      <Typography variant="h3" sx={{marginTop: '20px'}}>{data.name}</Typography>
      <Avatar src={data.owner.avatar_url} sx={{marginRight: '16px', height: '100px', width: '100px'}}/>
      <Typography paragraph><strong>{data.description}</strong></Typography>
      <Typography paragraph>Created: <strong>{getMyDate(data.created_at)}</strong></Typography>
      <Typography paragraph>Updated: <strong>{getMyDate(data.updated_at)}</strong></Typography>
      <Typography paragraph>Language: <strong>{data.language}</strong></Typography>
      <Typography paragraph>Forks: <strong>{data.forks}</strong></Typography>
      <Typography paragraph>Issues: <strong>{data.open_issues}</strong></Typography>
      <Typography paragraph>Subscribers: <strong>{data.subscribers_count}</strong></Typography>
      <MyButton title={'Go back'} onClickCb={() => navigate(-1)}/>
    </Box>
  );
};

export default RepositoryDetails;
