import { Box } from "@mui/material";
import DrawerAppBar from "../DrawerAppBar";
import { Outlet } from "react-router-dom";
import abstract from "../assets/images/sky2.jpg";

function Layout() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${abstract})`,
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
