import React from 'react';
import {usersApi} from "../store/api";
import MySpinner from "../../../common/components/MySpinner";
import {usePaginate} from "../../../common/hooks/usePaginate";
import {Box, Typography} from "@mui/material";
import MyPagination from "../../../common/components/MyPagination";
import MyCard from "../../../common/components/MyCard";

const Users = () => {
  const {paginationConfig, changePageHandler} = usePaginate()
  const {data: users, isLoading, isFetching} = usersApi.useGetAllUsersQuery(paginationConfig, {refetchOnMountOrArgChange: true})

  if(users) {
    console.log(users)
  }
  if(!users) {
    return <MySpinner/>
  }

  return (
    <Box sx={{
      flexGrow: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '600px',
      maxWidth: '90%',
      margin: '0 auto'
    }}>
      <Typography variant="h4" sx={{padding: '20px'}}> Total amount: {users?.total_count}</Typography>
      <Box sx={{flexGrow: '1'}}>
        {
          isFetching || isLoading ?
            <MySpinner/> :
            <>{users?.items.map((user) => <MyCard user={user} key={user.id}/>)}</>
        }
      </Box>
      <MyPagination
        page={paginationConfig.offset + 1}
        count={Math.ceil(users?.total_count as number/paginationConfig.perPage)}
        onChange={changePageHandler}
      />
    </Box>
  );
};

export default Users;
