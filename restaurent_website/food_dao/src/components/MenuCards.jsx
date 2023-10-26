import React, { useState } from "react";

import fullMenu from "../assets/database/fullMenu.json";

import { Box } from "@mui/material";
import MenuCardContent from "./MenuCardContent";

const MenuCards = () => {
  const bevRage = fullMenu.filter((itemz) => itemz.itemType === "Beverages");
  const starteRs = fullMenu.filter((itemz) => itemz.itemType === "Starter");
  const mainS = fullMenu.filter((itemz) => itemz.itemType === "Main Course");
  const dessertZ = fullMenu.filter((itemz) => itemz.itemType === "Desserts");

  const [cart, setCart] = useState([]);

  const addToCart = (data) => {
    // for(let i =0;i<cart.length;i++){
    //   if(cart[i].id === data.id){
    //     setCart(cart[i].quantity ++)
    //   }else(
    //     setCart([...cart, data])
    //   )

    //cart[i].id === data.id ? setCart(cart[i].quantity ++) : setCart([...cart, data])

    //   if(cart.find(o=>o.id === data.id)){
    //     for(let i =0;i<cart.length;i++){
    //         if(cart[i].id === data.id){
    //           setCart(cart[i].quantity ++)
    //         }else continue
    //   }
    // }

    // cart.find((o) => {
    //   if (o.id === data.id) {
    //     setCart(o.quantity++);
    //   } else {
    //     setCart([...cart, data]);
    //   }
    // });

    // else{
      setCart([...cart, data])
    // }
  };
  console.log("cart", cart);
  // setCart([...cart, data]);

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}
      >
        <MenuCardContent
          arrName={bevRage}
          addToCart={addToCart}
          varCart={cart}
        />
        <MenuCardContent arrName={starteRs} addToCart={addToCart} />
        <MenuCardContent arrName={mainS} addToCart={addToCart} />
        <MenuCardContent arrName={dessertZ} addToCart={addToCart} />
      </Box>
    </>
  );
};

export default MenuCards;
