import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2Icon from "@mui/icons-material/Person2";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ChairIcon from "@mui/icons-material/Chair";

export default function ButtonAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => {
      return !prev;
    });
  };

  const listOptions = [
    { option: "Resumen", icon: <DashboardIcon /> },
    { option: "Mi perfil", icon: <Person2Icon /> },
    { option: "Reservas", icon: <BookmarkIcon /> },
    { option: "Estanterias", icon: <MenuBookIcon /> },
    { option: "Salas", icon: <ChairIcon /> },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {listOptions.map((curr, index) => (
            <ListItem key={curr} disablePadding>
              <ListItemButton>
                <ListItemIcon>{curr.icon}</ListItemIcon>
                <ListItemText primary={curr.option} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
