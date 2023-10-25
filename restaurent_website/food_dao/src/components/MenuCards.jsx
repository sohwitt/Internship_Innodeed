import React from 'react'
    
import starters from '../assets/database/starters.json'
import main from '../assets/database/main.json'
import bevrages from '../assets/database/bevrages.json'
import desserts from '../assets/database/desserts.json'

import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const MenuCards = () => {
  return (
   <>
   <Box sx={{display: 'flex', flexDirection:'column', textAlign: 'center'}}>
    <h1>Beverages</h1>
    <Box sx={{display: 'flex', flexWrap:'wrap', justifyContent:'start', mb: 4}}>
    
    {bevrages.map((boo) => {
        return(
            <Card sx={{maxWidth:'360px', display:'flex', m:2}}>
                <CardActionArea>
                    <CardMedia 
                        sx={{maxHeight: '260px'}}
                        component={'img'}
                        src={boo.image}
                        alt={boo.name}
                    />
                    <CardContent>
                        <Typography variant='h5' gutterBottom component={"div"}>
                            {boo.name}
                        </Typography>
                        <Typography variant='body2' >
                            {boo.description}
                        </Typography>
                    </CardContent>
                    <Box sx={{display: 'flex', justifyContent:'space-between',mx:4,mb:2,}}>
                    <Typography variant='body2'>Rs.{boo.price}</Typography>
                    <Button variant="contained" color="success">Add to Cart</Button>
</Box>

                </CardActionArea>
            </Card>)
    })}</Box>
    <h1>Starters</h1>
    <Box sx={{display: 'flex', flexWrap:'wrap', justifyContent:'start', mb: 4}}>
    
    {starters.map((ooo) => {
        return(
            <Card sx={{maxWidth:'360px', display:'flex', m:2}}>
                <CardActionArea>
                    <CardMedia 
                        sx={{maxHeight: '260px'}}
                        component={'img'}
                        src={ooo.image}
                        alt={ooo.name}
                    />
                    <CardContent>
                        <Typography variant='h5' gutterBottom component={"div"}>
                            {ooo.name}
                        </Typography>
                        <Typography variant='body2' >
                            {ooo.description}
                        </Typography>
                    </CardContent>
                    <Box sx={{display: 'flex', justifyContent:'space-between',mx:4,mb:2,}}>
                    <Typography variant='body1' sx={{mt:1, fontWeight: '600'}}>Rs.{ooo.price}</Typography>
                    <Button variant="contained" color="success">Add to Cart</Button>
                    </Box>
                </CardActionArea>
            </Card>)
    })}</Box>
    <h1>Main Course</h1>
    <Box sx={{display: 'flex', flexWrap:'wrap', justifyContent:'start'}}>
    
    {main.map((moo) => {
        return(
            <Card sx={{maxWidth:'360px', display:'flex', m:2}}>
                <CardActionArea>
                    <CardMedia 
                        sx={{maxHeight: '260px'}}
                        component={'img'}
                        src={moo.image}
                        alt={moo.name}
                    />
                    <CardContent>
                        <Typography variant='h5' gutterBottom component={"div"}>
                            {moo.name}
                        </Typography>
                        <Typography variant='body2' >
                            {moo.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>)
    })}</Box>
    <h1>Desserts</h1>
    <Box sx={{display: 'flex', flexWrap:'wrap', justifyContent:'start'}}>
    
    {desserts.map((doo) => {
        return(
            <Card sx={{maxWidth:'360px', display:'flex', m:2}}>
                <CardActionArea>
                    <CardMedia 
                        sx={{maxHeight: '260px'}}
                        component={'img'}
                        src={doo.image}
                        alt={doo.name}
                    />
                    <CardContent>
                        <Typography variant='h5' gutterBottom component={"div"}>
                            {doo.name}
                        </Typography>
                        <Typography variant='body2' >
                            {doo.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>)
    })}</Box>
   </Box>
   
   
   </>
  )
}

export default MenuCards