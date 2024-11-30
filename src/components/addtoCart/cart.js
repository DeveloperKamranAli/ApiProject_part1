import * as React from "react";
import Box, { } from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  decreasequantity,
  increasquantity,
  removeItems,
} from "../../slices/add-Cart/products/products";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CartList(props) {
  const { open, toggleDrawer } = props;

  const { items } = useSelector((state) => state.products);

  const dispatch = useDispatch();


  const totalPrice = items?.length && items?.reduce(
    (sum, products) => sum + products?.price * products.quantity,0
  );
  

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 450 }} role="presentation">
          <Typography variant="body">Cart items</Typography>
          {!items?.length ? (
            <Typography className="text-center" variant="h5">
              nothin to show...
            </Typography>
          ) : (
            items?.map((items) => {
              return (
                <Box className="d-flex justify-content-between align-items-center p-2">
                  <div>
                    <img width="40px" src={items?.image} alt="" />
                    <span>
                      {items?.title?.length >= 15
                        ? items?.title.slice(0, 15)
                        : items?.title}
                    </span>
                  </div>
                  <ButtonGroup
                    size="small"
                    variant="text"
                    aria-label="Basic button group"
                  >
                    <Button>
                      <RemoveIcon
                        onClick={() => dispatch(decreasequantity(items))}
                      />
                    </Button>
                    <Button>{items?.quantity}</Button>
                    <Button onClick={() => dispatch(increasquantity(items))}>
                      <AddIcon />
                    </Button>
                  </ButtonGroup>
                  <span>{items?.price}</span>
                  <Button>
                    <DeleteIcon onClick={() => dispatch(removeItems(items))} />
                  </Button>
                </Box>
              );
            })
          )}

          <Box className="position-absolute w-100 d-flex justify-content-between bg-dark text-white py-3 px-3 bottom-0">
            <Typography>Total Price</Typography>
            <Typography>${totalPrice}</Typography>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
