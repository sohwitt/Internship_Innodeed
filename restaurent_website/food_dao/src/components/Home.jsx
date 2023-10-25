import React from "react";
import Wrapper from "./Wrapper";
import SendIcon from "@mui/icons-material/Send";

import { Box, Button, Typography } from "@mui/material";
import "../styles/home.css";

const Home = () => {
  return (
    <Wrapper>
      <Box sx={{ mt: 8 }}>
        <div className="animBg">
          <Box sx={{ p: 8 }}>
            <Typography
              variant="h1"
              color={"ghostwhite"}
              sx={{ p: 4, fontWeight: "600" }}
            >
              FoodDAO
            </Typography>
            <Typography variant="h6" color={"ghostwhite"} sx={{ p: 4, pt: 0 }}>
              Welcome to Food Dao, the ultimate destination for authentic Asian
              cuisine. At Food Dao, we believe that food is not just a
              necessity, but a way of life. That's why we use only the freshest
              ingredients, the finest spices, and the most traditional recipes
              to create dishes that are delicious, nutritious, and satisfying.
              Whether you crave for spicy curries, savory noodles, or crunchy
              spring rolls, we have something for everyone. Come and experience
              the flavors of Asia at Food Dao, where every bite is a journey.
            </Typography>
          </Box>
          <Box sx={{ p: 8 }}>
            <div className="homeOrderBtn">
              <Button
                href="/menu"
                variant="contained"
                color="warning"
                sx={{ width: "220px", height: "64px", fontSize: "40px" }}
                endIcon={<SendIcon sx={{}} />}
              >
                Order
              </Button>
            </div>
          </Box>
        </div>
      </Box>
    </Wrapper>
  );
};

export default Home;
