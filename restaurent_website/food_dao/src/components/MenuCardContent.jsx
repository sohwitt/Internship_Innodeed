import React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Button from "@mui/joy/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";



function MenuCardContent(props) {
  const dispatch = useDispatch();
  const textC = '#fbfefe';

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign:'start',
          mb: 4,
        }}
      >
        {props.arrName.map((itemx) => (
          <Box
            component="ul"
            sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 2 }}
          >
            <Card component="li" sx={{ maxWidth: "300px", flexGrow: 1, p: 0 }}>
              <CardCover sx={{ p: 0 }}>
                <img src={itemx.image} alt={itemx.name} loading="lazy" />
              </CardCover>
              <CardContent sx={{ p:2,mx:1, mt: 10, bgcolor: 'rgba(49,51,57,0.6)', borderRadius:'20px'}}>
                <Typography level="body-lg" fontWeight="lg" textColor={textC}>
                  {itemx.name}
                </Typography>
                <Typography textColor={textC} level="body-sm">
                  {itemx.description}
                </Typography>
              </CardContent>
              <CardOverflow
                variant="soft"
                sx={{ bgcolor: "background.level1" }}
              >
                <Divider inset="context" />
                <CardContent
                  orientation="horizontal"
                  sx={{ justifyContent: "space-between", pl: 2 }}
                >
                  <Typography
                    level="body-lg"
                    fontWeight="md"
                    textColor="text.secondary"
                    sx={{ py: "10px" }}
                  >
                    Rs.{itemx.price}
                  </Typography>
                  <Button
                    variant="soft"
                    color="warning"
                    sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
                    onClick={() => dispatch(addToCart(itemx))}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </CardOverflow>
            </Card>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default MenuCardContent;
