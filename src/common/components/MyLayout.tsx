import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";
import MyNavBar from "./MyNavBar";


const MyLayout = () => {

  return (
    <Box
      sx={{
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    }}>
      <MyNavBar/>
      <Outlet/>
    </Box>
  );
};
export default MyLayout;
