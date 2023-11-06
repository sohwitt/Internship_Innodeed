import React, { useState } from "react";

// import fullMenu from "../assets/database/fullMenu.json";

import { Box } from "@mui/material";
import MenuCardContent from "./MenuCardContent";
import { useSelector } from "react-redux";

import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import { TabPanel } from "@mui/joy";

const MenuCards = () => {
  //? !SECTION Redux

  const fullMenu = useSelector((state) => state.menuCart.fullMenu);
  //? !SECTION Redux END

  const bevRage = fullMenu.filter((itemz) => itemz.itemType === "Beverages");
  const starteRs = fullMenu.filter((itemz) => itemz.itemType === "Starter");
  const mainS = fullMenu.filter((itemz) => itemz.itemType === "Main Course");
  const dessertZ = fullMenu.filter((itemz) => itemz.itemType === "Desserts");

  //!SECTION Cart ConsoleLOG
  /*
  const [cart, setCart] = useState([{}]);
  let fakeCart = [...cart]
  
  const addToCart = (data) => {
    let isPresent = false
    fakeCart.map((element,index) => {
      
      if (element.id === data.id) {
        element.quantity++;
        isPresent = true;
        console.log('index',index);
      } 
    });
    
    if(isPresent == false){
      fakeCart.push(data);
    }

      setCart(fakeCart)

  };
  console.log("fakecart", fakeCart)
  console.log("cart", cart);
*/
  //!SECTION END

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}
      >
        <Tabs
          aria-label="tabs"
          defaultValue={0}
          sx={{ bgcolor: "transparent", alignItems:'center' }}
        >
          <TabList
            disableUnderline
            sx={{
              mt:4,
              p: 0.5,
              gap: 0.5,
              fontSize:'xl',
              fontWeight:'600',
              borderRadius: "xl",
              bgcolor: "background.level1",
              [`& .${tabClasses.root}[aria-selected="true"]`]: {
                boxShadow: "sm",
                bgcolor: "background.surface",
              },
            }}
          >
            <Tab disableIndicator>Beverages</Tab>
            <Tab disableIndicator>Starters</Tab>
            <Tab disableIndicator>Main Course</Tab>
            <Tab disableIndicator>Desserts</Tab>
          </TabList>
          <TabPanel value={0}>
            <MenuCardContent arrName={bevRage} />
          </TabPanel>
          <TabPanel value={1}>
            <MenuCardContent arrName={starteRs} />
          </TabPanel>
          <TabPanel value={2}>
            <MenuCardContent arrName={mainS} />
          </TabPanel>
          <TabPanel value={3}>
            <MenuCardContent arrName={dessertZ} />
          </TabPanel>
        </Tabs>
      </Box>
    </>
  );
};

export default MenuCards;
