import React from 'react'
import Header from './Header'
import { Box, Grid, Typography } from '@mui/material'
import Footer from './Footer'
import MenuCards from './MenuCards'

const Menu = () => {
  return (
    <>
        <Header />

        <Box sx={{mt: 8}}>
        <Grid container spacing={2}>
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
            <Typography variant='h3'>Cart</Typography>
            </Grid>
        </Grid>
        </Box>
        
        <Footer />
    </>
    )
}

export default Menu