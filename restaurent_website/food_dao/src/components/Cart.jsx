import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const Cart = () => {
 const [itemCount, setItemCount] = React.useState(1);
 const [itemCount2, setItemCount2] = React.useState(1);
 const [itemCount3, setItemCount3] = React.useState(1);


  return (
    <>
      <Box
        sx={{ bgcolor: "info.light", minHeight: "100vh", width: "100%", p: 4 }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "600", color: "whitesmoke" }}
          >
            Your Order Summary
          </Typography>
        </Box>
        <Box sx={{bgcolor:'whitesmoke', my:4, borderRadius:'20px', minHeight:'300px',p:4}}>
            {/* <Typography >Food Items</Typography> */}
            <p style={{fontWeight:'600'}}> Food Items</p>
            <Box sx={{display:'flex', justifyContent:'space-between',mt:2}}>
                <p>Masala Chai</p>
                <p>Rs.40</p>
                <ButtonGroup>
                    <Button
                        onClick={() => {
                            setItemCount(Math.max(itemCount - 1, 0));
                        }}
                    >
                        {" "}
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button >{itemCount}</Button>
                    <Button
                        onClick={() => {
                            setItemCount(itemCount + 1);
                        }}
                    >
                        {" "}
                        <AddIcon fontSize="small" />
                    </Button>
                    <Button onClick={() => {
                            setItemCount(0);
                        }}><DeleteIcon color='warning' /></Button>
                </ButtonGroup>
            </Box>
            <Box sx={{display:'flex', justifyContent:'space-between',mt:2}}>
                <p>Chilli Paneer</p>
                <p>Rs.220</p>
                <ButtonGroup>
                    <Button
                        onClick={() => {
                            setItemCount2(Math.max(itemCount2 - 1, 0));
                        }}
                    >
                        {" "}
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button >{itemCount2}</Button>
                    <Button
                        onClick={() => {
                            setItemCount2(itemCount2 + 1);
                        }}
                    >
                        {" "}
                        <AddIcon fontSize="small" />
                    </Button>
                    <Button onClick={() => {
                            setItemCount2(0);
                        }}><DeleteIcon color='warning' /></Button>
                </ButtonGroup>
            </Box>
            <Box sx={{display:'flex', justifyContent:'space-between',mt:2}}>
                <p>Palak Paneer</p>
                <p>Rs.40</p>
                <ButtonGroup>
                    <Button
                        onClick={() => {
                            setItemCount3(Math.max(itemCount3 - 1, 0));
                        }}
                    >
                        {" "}
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button >{itemCount3}</Button>
                    <Button
                        onClick={() => {
                            setItemCount3(itemCount3 + 1);
                        }}
                    >
                        {" "}
                        <AddIcon fontSize="small" />
                    </Button>
                    <Button onClick={() => {
                            setItemCount3(0);
                        }}><DeleteIcon color='warning' /></Button>
                </ButtonGroup>
            </Box>
        </Box>
        <Box sx={{bgcolor:'whitesmoke', my:4, borderRadius:'20px', minHeight:'200px',p:4}}>
        <p style={{fontWeight:'600'}}>Tax</p>
        </Box>
        <Box sx={{bgcolor:'whitesmoke', my:4, borderRadius:'20px', minHeight:'200px',p:4}}>
        <p style={{fontWeight:'600'}}>Final Amount</p>
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-evenly'}}><Typography variant="h4" sx={{mt:2}}>Rs. 980</Typography>
        <Button variant="contained" color="warning" sx={{height:'64px',width:'40%',fontSize:'30px'}}>Order<LocalDiningIcon fontSize="large" /></Button></Box>
      </Box>
    </>
  );
};

export default Cart;
