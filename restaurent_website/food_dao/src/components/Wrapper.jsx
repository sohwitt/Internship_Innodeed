import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ThemeProvider, createTheme } from "@mui/material";

const lightTheme = createTheme({
    typography:{
        fontFamily: 'Poppins'
    }
})

const Wrapper = ({ children }) => {
  return (
    <>
    <Header />
    <ThemeProvider theme={lightTheme}>
    <div>{children}</div>
    </ThemeProvider>
    <Footer />
  </>
  )
}

export default Wrapper

