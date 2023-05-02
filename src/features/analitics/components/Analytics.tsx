import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {useAppDispatch, useAppSelector} from '../../../common/store/hooks';
import EmptyPlug from './EmptyPlug';
import {analyticsApi} from '../store/api';
import MySpinner from '../../../common/components/MySpinner';
import MyButton from '../../../common/components/MyButton';
import {removeAllRepos} from '../store/analyticsSlice';

function Analytics() {
  const dispatch = useAppDispatch();
  const selectedRepos = useAppSelector((state) => state.analyticsReducer.selectedRepositories);
  const {data, isLoading, isFetching} = analyticsApi.useGetReposAnalyticsDataQuery(selectedRepos, {refetchOnMountOrArgChange: true});

  if (isFetching || isLoading) {
    return <MySpinner />;
  }

  if (!selectedRepos.length) {
    return <EmptyPlug />;
  }

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={data} />
      <MyButton onClickCb={() => dispatch(removeAllRepos())} title="Remove all" />
    </>
  );
}

export default Analytics;
