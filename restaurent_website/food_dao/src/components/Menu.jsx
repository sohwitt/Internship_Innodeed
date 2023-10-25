import React from 'react'
import Header from './Header'
import { Box, Grid } from '@mui/material'
import Footer from './Footer'
import MenuCards from './MenuCards'
import Cart from './Cart'

const Menu = () => {
  return (
    <>
        <Header />

        <Box sx={{mt: 8}}>
        <Grid container spacing={0}>
            <Grid item xs={8}>
            <Box sx={{
                height:'100vh',
                overflow:'scroll',
                scrollBehavior:'smooth'
            }}>
                <MenuCards />
            </Box>
            </Grid>
            <Grid item xs={4}>
            <Cart />
            </Grid>
        </Grid>
        </Box>
        
        <Footer />
    </>
    )
}

export default Menu