import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Cart from "../addtoCart/cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import Signup from "../../signup/signup";


export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const { items } = useSelector((state) => state.products);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            cart Items
          </Typography>
          <Badge className="me-3" badgeContent={items?.length} color="error">
            <ShoppingCartIcon onClick={toggleDrawer(true)} />
          </Badge>
          <Badge>
          <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to="/Signup" className="text-decoration-none text-dark">Sign In</Link></MenuItem>
                <MenuItem onClick={handleClose}>Sign Up</MenuItem>
              </Menu>
            </div>
  
          </Badge>
        </Toolbar>
      </AppBar>

      <Cart open={open} toggleDrawer={toggleDrawer} />
    </Box>
  );
}
