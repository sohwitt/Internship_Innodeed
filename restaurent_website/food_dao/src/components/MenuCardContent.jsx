import React from 'react'
import starters from '../assets/database/starters.json'
import main from '../assets/database/main.json'
import bevrages from '../assets/database/bevrages.json'
import desserts from '../assets/database/desserts.json'

import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'


function MenuCardContent({name}) {
    
  return (
    <>
    <h1>{name}</h1>
    <Box sx={{display: 'flex', flexWrap:'wrap', justifyContent:'start', mb: 4}}>
    
    {name.map((ooo) => {
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
    </>
  )
}

export default MenuCardContent