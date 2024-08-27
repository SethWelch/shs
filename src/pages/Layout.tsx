import { Box } from "@mui/material";
import DrawerAppBar from "../DrawerAppBar";
import { Outlet } from "react-router-dom";
import sky from "../assets/images/sky.jpg";

function Layout() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${sky})`,
        overflow: "hidden",
      }}
    >
      <DrawerAppBar title="Strategic Healthcare Solutions" />
      <Box
        sx={{
          mt: "80px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
