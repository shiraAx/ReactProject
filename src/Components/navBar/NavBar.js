import React from "react"
import {Link} from 'react-router-dom'
import "./NavBar.css"

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import InsertCommentIcon from '@material-ui/icons/InsertComment';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 6000,
  },
});


export const NavBar=()=>{

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <>


 <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab
          icon={<CardMembershipIcon />}
          label="LOGIN"
          component={Link}
          to="login"
          className={classes.tab}
        />
        <Tab
          icon={<CardGiftcardIcon />}
          label="GIFTS"
          component={Link}
          to="products"
          className={classes.tab}
        />
        <Tab
          icon={<ShoppingCartIcon />}
          label="CART"
          component={Link}
          to="cart"
          className={classes.tab}
        />
          <Tab
          icon={<InsertCommentIcon />}
          label="ABOUT"
          component={Link}
          to="welcome"
          className={classes.tab}
        />
      </Tabs>
    </Paper>
        
        </>
    )
}


