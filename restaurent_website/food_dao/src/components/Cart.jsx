import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import CartItems from "./CartItems";

const Cart = () => {
  const [itemCount2, setItemCount2] = React.useState(1);
  const [itemCount3, setItemCount3] = React.useState(1);
  return (
    <>
      <Box
        sx={{ bgcolor: "info.light", minHeight: "95vh", width: "100%", p: 4 }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "600", color: "whitesmoke" }}
          >
            Your Order Summary
          </Typography>
        </Box>

        <Box
          sx={{
            bgcolor: "whitesmoke",
            my: 4,
            borderRadius: "20px",
            minHeight: "350px",
            maxHeight: "380px",
            p: 4,
          }}
        >
          {/* <Typography >Food Items</Typography> */}
          <p style={{ fontWeight: "600" }}> Food Items</p>
          <Box>
            <CartItems />
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "whitesmoke",
            my: 4,
            borderRadius: "20px",
            minHeight: "200px",
            p: 4,
          }}
        >
          <p style={{ fontWeight: "600" }}>Tip</p>
        </Box>
        <Box
          sx={{
            bgcolor: "whitesmoke",
            my: 4,
            borderRadius: "20px",
            minHeight: "200px",
            p: 4,
          }}
        >
          <p style={{ fontWeight: "600" }}>Final Amount</p>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Typography variant="h4" sx={{ mt: 2 }}>
            Rs. 980
          </Typography>
          <Button
            variant="contained"
            color="warning"
            sx={{ height: "64px", width: "40%", fontSize: "30px" }}
          >
            Order
            <LocalDiningIcon fontSize="large" />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
