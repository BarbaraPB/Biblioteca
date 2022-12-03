import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
import { Logout, Money } from "@mui/icons-material";

const routes = {
  "/reservas-libros": "Reservas de libros",
  "/reservas-salas": "Reservas de salas",
  "/saldos-pendientes": "Saldos pendientes",
  "/resumen": "Resumen",
  "/historial": "Historial",
  "/perfil": "Mi perfil",
};

export default function ButtonAppBar() {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const routeKeys = Object.keys(routes);
    if (!routeKeys.includes(location.pathname)) {
      navigate("/resumen");
    }
  }, [location, navigate]);

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => {
      return !prev;
    });
  };

  const listOptions = [
    { option: "Resumen", icon: <DashboardIcon />, path: "/resumen" },
    { option: "Mi perfil", icon: <Person2Icon />, path: "/perfil" },
    { option: "Reservas", icon: <BookmarkIcon />, path: "/historial" },
    { option: "Estanterias", icon: <MenuBookIcon />, path: "/reservas-libros" },
    { option: "Salas", icon: <ChairIcon />, path: "/reservas-salas" },
    {
      option: "Saldos pendientes",
      icon: <Money />,
      path: "/saldos-pendientes",
    },
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
            {routes[location.pathname] ?? location.pathname}
          </Typography>
          <Button color="inherit">
            <Logout sx={{ marginRight: 1 }} />
            Salir
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {listOptions.map((curr, index) => (
            <ListItem key={curr} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(curr.path);
                  setDrawerOpen(false);
                }}
              >
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
