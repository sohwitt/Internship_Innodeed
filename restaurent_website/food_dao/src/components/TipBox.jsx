import * as React from "react";
import FormControl from "@mui/material/FormControl";
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Box } from "@mui/material";
import { Button, Typography } from "@mui/joy";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ColorToggleButton() {
  const [tipAmount, setTipAmount] = useState("0");
  const [visiblity, setVisiblity] = useState(true);
  const { totalPrice } = useSelector((state) => state.menuCart);


  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <ToggleButtonGroup
          color="warning"
          value={tipAmount}
          size="lg"
          spacing={2}
          variant="soft"
          exclusive
          aria-label="Platform"
          sx={{ mt: 2 }}
          onChange={(event, newValue) => {
            setTipAmount((totalPrice * newValue) / 100);
            console.log(newValue);
          }}>
            <Button value="10">10%</Button>
            <Button value="15">15%</Button>
            <Button value="20">20%</Button>
            <Button value="25">25%</Button>
            {/* <Button onClick={setVisiblity(visiblity => !visiblity)}>Custom</Button> */}
            
        </ToggleButtonGroup>

        <FormControl
          fullWidth
          color="warning"
          sx={{ display:'false', m: 1, mt: 4, width: "80%" }}
        >
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={
              <InputAdornment position="start">Rs.</InputAdornment>
            }
            label="Amount"
          />
        </FormControl>
        <Typography sx={{ m: 0, mt: 2 }}>
          Amount Tipped = Rs.{tipAmount}
        </Typography>
      </Box>
    </>
  );
}
