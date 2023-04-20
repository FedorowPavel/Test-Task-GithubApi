import React from 'react';
import {useAppSelector} from "../../../common/store/hooks";
import EmptyPlug from "./EmptyPlug";

const Analytics = () => {
  const selectedRepos = useAppSelector(state => state.analyticsReducer.selectedRepositories)

  if(!selectedRepos.length) {
    return <EmptyPlug/>
  }

  return (
    <div>
      {selectedRepos.map((i) => {
        return <div>{i}</div>
      })}
    </div>
  );
};

export default Analytics;
