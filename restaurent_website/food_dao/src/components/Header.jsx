import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React, {useState} from 'react'
import logo from '../assets/logosushi.png';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import '../styles/header.css';
import { Link } from 'react-router-dom';
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
        <div >
            <AppBar component={'nav'} sx={{bgcolor: 'info.dark'}}>
            <Toolbar>

            <img src={logo} className='logo'></img>
            <Typography color={'lime'} variant='h4' sx={{flexGrow: 1}}><b>FoodDAO</b></Typography>  
            <Box sx={{display:{xs: 'none', sm:'block'}}}>
                <ul className='nav-menu'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/menu'}>Menu</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Profile</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Login</Link>
                    </li>
                </ul>
            </Box>
            {/*//! IconButton */}
            {/* <IconButton color='aqua' aria-label="open drawer" edge="end" sx={{ml: 2}}>
            <LocalDiningIcon />
            </IconButton> */}
            </Toolbar>
            </AppBar>
            {/*//! Drawer Component */}
            {/* <Box component='nav'>
                <Drawer variant='temporary' open={drawerOpen}>
                    {drawer}
                </Drawer>
            </Box> */}
        </div>
    </>
  )
}

export default Header