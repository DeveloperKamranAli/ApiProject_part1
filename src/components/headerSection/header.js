import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "../addtoCart/cart";
import { useSelector } from "react-redux";

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const count = useSelector((state) => state.counter);
  console.log(count, "count");

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Badge badgeContent={count.value} color="error">
            <ShoppingCartIcon onClick={toggleDrawer(true)} />
          </Badge>
        </Toolbar>
      </AppBar>

      <Cart open={open} toggleDrawer={toggleDrawer} />
    </Box>
  );
}
