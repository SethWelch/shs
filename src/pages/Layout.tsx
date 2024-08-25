import { Box } from "@mui/material";
import DrawerAppBar from "../DrawerAppBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Box>
      <DrawerAppBar title="Strategic Healthcare Solutions" />
      <Box sx={{ mt: "80px" }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
