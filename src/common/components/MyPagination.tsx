import React from 'react';
import {Pagination} from "@mui/material";

interface PaginationProps {
  page: number,
  count: number,
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void
}

const MyPagination: React.FC<PaginationProps> = ({page, count, onChange}) => {
  return (
    <Pagination
      siblingCount={0}
      count={count}
      variant="outlined"
      shape="rounded"
      color="primary"
      page={page}
      onChange={onChange}
      sx={{m: '40px auto'}}
    />
  );
};

export default MyPagination;
