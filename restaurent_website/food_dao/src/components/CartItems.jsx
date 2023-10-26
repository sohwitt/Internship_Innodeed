import React from "react";
import fullMenu from "../assets/database/fullMenu.json";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItems = () => {
  const [itemCount, setItemCount] = React.useState(1);

  const fakeCart = ["bev002", "main005", "des003"];
  const tempOrder = [];
  for (let i = 0; i < fakeCart.length; i++) {
    let itemx = fullMenu.find((itm) => itm.id === fakeCart[i]);
    console.log(itemx);
    tempOrder.push(itemx);
  }
  console.log("temp", tempOrder);
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {tempOrder.map((itemz) => (
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Box>
              <Typography>{itemz.name}</Typography>
              <Typography variant="subtitle1">Rs.{itemz.price}</Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography>{itemz.price * 3}</Typography>
                <Typography variant="caption">tax {itemz.tax}%</Typography>
              </Box>
              <Box >
                <ButtonGroup sx={{ height: "36px", ml: 2 }}>
                  <Button
                    onClick={() => {
                      setItemCount(Math.max(itemCount - 1, 0));
                    }}
                  >
                    {" "}
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button>{itemCount}</Button>
                  <Button
                    onClick={() => {
                      setItemCount(itemCount + 1);
                    }}
                  >
                    {" "}
                    <AddIcon fontSize="small" />
                  </Button>
                  <Button
                    onClick={() => {
                      setItemCount(0);
                    }}
                  >
                    <DeleteIcon color="warning" />
                  </Button>
                </ButtonGroup>
                <Typography sx={{ml:16, fontWeight:'600'}}>
                  Rs.{(itemz.price + (itemz.tax * itemz.price) / 100) * 3}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default CartItems;
