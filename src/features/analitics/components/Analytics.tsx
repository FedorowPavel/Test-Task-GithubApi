import React from 'react';
import {useAppSelector} from "../../../common/store/hooks";
import EmptyPlug from "./EmptyPlug";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {analyticsApi} from "../store/api";
import MySpinner from "../../../common/components/MySpinner";

const Analytics = () => {
  const selectedRepos = useAppSelector(state => state.analyticsReducer.selectedRepositories)
  const {data, isLoading, isFetching} = analyticsApi.useGetReposAnalyticsDataQuery(selectedRepos, {refetchOnMountOrArgChange: true})

  if(isFetching || isLoading) {
    return <MySpinner/>
  }

  if(!selectedRepos.length) {
    return <EmptyPlug/>
  }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={data}/>
    </div>
  );
};

export default Analytics;
