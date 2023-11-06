import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../assets/logosushi.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import "../styles/header.css";
import { Link } from "react-router-dom";


const Header = () => {
  //! Drawer useState
  // const [drawerOpen, setDrawerOpen] = useState(false);

  //!drawer onClick
  // const drawerToggle = () => {
  //     setDrawerOpen(!drawerOpen);
  //     return drawerOpen;
  // }

  //!drawer
  // const drawer = (
  //     <Box onClick={drawerToggle} sx={{textAlign: 'center'}}>
  //         <Typography variant='h3'>Cart</Typography>
  //     </Box>
  // )

  return (
    <>
      <div>
        <AppBar component={"nav"} sx={{ bgcolor: "#fbfefe" }}>
          <Toolbar>
            <img src={logo} className="logo"></img>
            <Typography variant="h4" sx={{ flexGrow: 1, color: "#313339" }}>
              <b>FoodDAO</b>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="nav-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/signup"}><AccountCircleIcon fontSize="large" /></Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Header;
