import { Box } from "@mui/material";
import DrawerAppBar from "../DrawerAppBar";
import { Outlet } from "react-router-dom";
import sky from "../assets/images/sky.jpg";

function Layout() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${sky})`,
        backgroundSize: "stretch",
        overflow: "hidden",
      }}
    >
      <DrawerAppBar />
      <Box
        sx={{
          mt: "60px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
