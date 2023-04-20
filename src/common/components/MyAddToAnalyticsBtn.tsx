import React, {FC, useCallback, useEffect, useState} from 'react';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {Box} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {addRepo, removeRepo} from "../../features/analitics/store/analyticsSlice";

interface Props {
  repoFullName: string
}

const MyAddToAnalyticsBtn: FC<Props> = ({repoFullName}) => {
  const selectedRepos = useAppSelector(state => state.analyticsReducer.selectedRepositories)
  const [added, setIsAdded] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const addHandler = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(added ? removeRepo(repoFullName) : addRepo(repoFullName))
  }, [added])

  useEffect(() => {
    if(selectedRepos.includes(repoFullName)) {
      setIsAdded(true)
    } else {
      setIsAdded(false)
    }
  }, [selectedRepos])

  return (
    <Box
      onClick={(e) => addHandler(e)}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '10px',
        right: '10px',
        border: '1px solid lightgrey',
        borderRadius: '4px',
        transition: '0.3s',
        padding: '4px',

        '&:hover': {
          backgroundColor: 'lightgrey'
        }

      }}>
      {added ? <RemoveCircleIcon/> : <AddCircleIcon/>}
      <TrendingUpIcon/>
    </Box>
  );
};

export default MyAddToAnalyticsBtn;
