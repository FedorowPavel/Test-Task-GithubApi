import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";
import MyNavBar from "./MyNavBar";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {addRepo, removeRepo} from "../../features/analitics/store/analyticsSlice";


const MyLayout = () => {
  const test = useAppSelector(state => state.analyticsReducer.selectedRepositories)
  const dispatch = useAppDispatch()

  return (
    <Box
      sx={{
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    }}>
      <MyNavBar/>
      <div onClick={() => dispatch(addRepo('test3'))}>{test[0]}</div>
      <Outlet/>
    </Box>
  );
};
export default MyLayout;
