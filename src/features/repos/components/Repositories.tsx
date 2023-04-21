import React from 'react';
import {repositoriesApi} from "../store/api";
import {Box, Typography} from "@mui/material";
import MySpinner from "../../../common/components/MySpinner";
import MyPagination from "../../../common/components/MyPagination";
import {usePaginate} from "../../../common/hooks/usePaginate";
import MyCard from "../../../common/components/MyCard";

const Repositories = () => {
  const {paginationConfig, changePageHandler} = usePaginate()
  const {data, isLoading, isFetching} = repositoriesApi.useGetRepositoriesQuery(paginationConfig, {refetchOnMountOrArgChange: true})

  if(!data) {
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
      <Typography variant="h4" sx={{padding: '20px'}}> Total amount: {data?.total_count}</Typography>
      <Box sx={{flexGrow: '1'}}>
      {
        isFetching || isLoading ?
          <MySpinner/> :
          <>
            {data?.items.map((repo) => <MyCard repository={repo} key={repo.id}/>)}
          </>
      }
      </Box>
      <MyPagination
        page={paginationConfig.offset + 1}
        count={Math.ceil(1000/paginationConfig.perPage)} // api gives only first 1000 for unauthorized requests
        onChange={changePageHandler}
      />
    </Box>
  );
};

export default Repositories;
