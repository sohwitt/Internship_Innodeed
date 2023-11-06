import React from "react";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { getTaxCart, incrementQuant, decrementQuant, removeItem } from "../features/cartSlice";

const CartItems = () => {
  //!SECTION Fake CART
  // const [itemCount, setItemCount] = React.useState(1);

  // const fakeCart = ["bev002", "main005", "des003"];
  // const tempOrder = [];
  // for (let i = 0; i < fakeCart.length; i++) {
  //   let itemx = fullMenu.find((itm) => itm.id === fakeCart[i]);
  //   console.log(itemx);
  //   tempOrder.push(itemx);
  // }
  // console.log("temp", tempOrder);

  //!SECTION REDUX CART

const {cart, totalQuant, totalPrice} = useSelector((state) => state.menuCart)

const dispatch = useDispatch();
dispatch(getTaxCart());

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column"}}>
        {cart.map((itemz) => (
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Box>
              <Typography>{itemz.name}</Typography>
              <Typography variant="subtitle1">Rs.{itemz.price}</Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography>{itemz.price * itemz.quantity}</Typography>
                <Typography variant="caption">tax {itemz.tax}%</Typography>
              </Box>
              <Box>
                <ButtonGroup sx={{ height: "36px", ml: 2 }}>
                  <Button
                   onClick={() => dispatch(decrementQuant(itemz))}
                  >
                    {" "}
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button>{itemz.quantity}</Button>
                  <Button
                   onClick={() => dispatch(incrementQuant(itemz))} 
                  >
                    {" "}
                    <AddIcon fontSize="small" />
                  </Button>
                  <Button
                    onClick={() => dispatch(removeItem(itemz))}
                  >
                    <DeleteIcon color="warning" />
                  </Button>
                </ButtonGroup>
                <Typography sx={{ ml: 16, fontWeight: "600" }}>
                  Rs.{(itemz.price + (itemz.tax * itemz.price) / 100) * itemz.quantity}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
        <Typography variant="h5">{totalPrice}</Typography>
      </Box>
    </>
  );
};

export default CartItems;
