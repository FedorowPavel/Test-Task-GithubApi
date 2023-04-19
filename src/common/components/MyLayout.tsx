import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";
import {useTheme} from "@mui/styles";
import {BlogTheme} from "@mui/material/styles";
import MyNavBar from "./MyNavBar";


const MyLayout = () => {
  const theme = useTheme<BlogTheme>()

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
