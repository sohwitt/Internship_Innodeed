import React from "react";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";


function MenuCardContent(props) {
    
  return (
    <>
    <h1>{props.arrName[0].itemType}</h1>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mb: 4,
        }}
      >
        {props.arrName.map((itemx) => (
          <Card sx={{ bgcolor:'primary.dark',maxWidth: "360px", display: "flex", m: 2,borderRadius:'10px' }}>
            <CardActionArea>
              <CardMedia
                sx={{ maxHeight: "260px",minHeight:"260px" }}
                component={"img"}
                src={itemx.image}
                alt={itemx.name}
              />
              <CardContent>
              <Paper elevation={4} sx={{p:2}}>
              <Typography variant="h5" gutterBottom component={"div"}>
                  {itemx.name}
                </Typography>
                <Typography variant="body2">{itemx.description}</Typography>
              
              </Paper>
                </CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mx: 4,
                  mb: 2,
                }}
              >
                <Typography variant="body1" sx={{ mt: 1, fontWeight: "600", color: 'whitesmoke' }}>
                  Rs.{itemx.price}
                </Typography>
                <Button variant="contained" color="warning" onClick={() => props.addToCart({id:itemx.id,quantity:1})}
                >
                  Add to Cart
                </Button>
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default MenuCardContent;
