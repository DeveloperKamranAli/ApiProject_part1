import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

export default function CartList(props) {
  const { open, toggleDrawer } = props;

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        ></Box>
      </Drawer>
    </div>
  );
}
