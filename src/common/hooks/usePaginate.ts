import React, {useCallback, useState} from 'react';
import {PaginationConfigModel} from '../types';

export function usePaginate() {
  const initialPaginationConfig: PaginationConfigModel = {
    offset: 0,
    perPage: 3,
  };

  const [paginationConfig, setPaginationConfig] = useState<PaginationConfigModel>(initialPaginationConfig);

  const changePageHandler = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
    setPaginationConfig({...paginationConfig, offset: value - 1});
  }, [paginationConfig]);

  return {
    paginationConfig,
    changePageHandler,
  };
}
