import React from "react";
import Header from "./Header";
import { Box, Grid } from "@mui/material";
import Footer from "./Footer";
import MenuCards from "./MenuCards";
import Cart from "./Cart";

const Menu = () => {
  return (
    <>
      <Header />
      
      <Box sx={{ mt: 8 }}>
        <Grid container spacing={0}>
          <Grid item xs={8}>
            <Box
              sx={{
                height: "92vh",
                overflow: "auto",
                scrollBehavior: "smooth",
              }}
            >
              <MenuCards />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                height: "92vh",
                overflow: "auto",
                scrollBehavior: "smooth",
              }}
            >
              <Cart />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  );
};

export default Menu;
