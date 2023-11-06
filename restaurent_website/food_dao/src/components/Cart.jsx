import { Box, Button, ButtonGroup, Typography, Paper } from "@mui/material";
import React from "react";
import TipBox from "./TipBox";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

const Cart = () => {
  const { totalPrice } = useSelector((state) => state.menuCart);

  return (
    <>
      <Box sx={{ bgcolor: "#a7ffeb", minHeight: "95vh", width: "100%", p: 4 }}>
        <Paper
          elevation={4}
          sx={{ bgcolor: "#31b8a7", textAlign: "center", borderRadius: "20px" }}
        >
          <Typography variant="h4" sx={{ color: "#fbfefe", p: 2,fontWeight:'600'}}>
            Your Order Summary
          </Typography>
        </Paper>

        <Paper
          elevation={4}
          sx={{
            bgcolor: "white",
            my: 4,
            borderRadius: "20px",
            minHeight: "350px",
            p: 4,
            overflow: "auto",
            textAlign: "end",
          }}
        >
          {/* <Typography >Food Items</Typography> */}
          <Typography variant="h6">Food Summary</Typography>
          <Box>
            <CartItems />
          </Box>
        </Paper>
        <Paper
          elevation={4}
          sx={{
            bgcolor: "white",
            my: 4,
            borderRadius: "20px",
            minHeight: "200px",
            p: 4,
            textAlign: "center"
          }}
        >
          <Typography variant="h6">Something for the Chefs</Typography>
          <TipBox />
        </Paper>

        <Paper
          elevation={4}
          sx={{
            bgcolor: "white",
            display: "flex",
            justifyContent: "space-between",
            p: 2,
            borderRadius: "20px",
          }}
        >
          <Typography variant="h4" sx={{ py:'10px', ml: 4,color:'#004d40'}}>
            Rs.{totalPrice}
          </Typography>
          <Button
            variant="contained"
            color="warning"
            sx={{
              height: "64px",
              width: "50%",
              fontSize: "30px",
              borderRadius: "10px",
              bgcolor:'#31b8a7'
            }}
          >
            Order
            <LocalDiningIcon fontSize="large" />
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default Cart;
