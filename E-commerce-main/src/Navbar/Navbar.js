import React from 'react'
import {AppBar,Toolbar,Badge,IconButton,Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import {useCart} from 'react-use-cart'
import useStyles from'./styles';
import logo from '../assets/commerce.png';
const Navbar = () => {
  const {totalItems} = useCart();
    const classes=useStyles();
    return (
    <div className={classes.fp}>
    <AppBar position='fixed' className={classes.appBar} color="inherit">
      <Toolbar>
      <Typography variant='h6' className={classes.title} color="inherit">
         <img src={logo} alt='commerce.js' height='25px' className={classes.image} color="primary"/>
         E-commerce App
         </Typography>
      <div className={classes.grow}/>
       <div className={classes.button}>
           <IconButton arial-label="show cart item" color="primary">
             <Badge badgeContent={totalItems} color="primary">
                 <ShoppingCart/>
             </Badge>    
           </IconButton> 
        </div>   
      </Toolbar>  
    </AppBar>          
    </div>
  )
}

export default Navbar