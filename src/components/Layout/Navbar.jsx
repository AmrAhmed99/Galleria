import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import NavbarIcon from './NavbarIcon';

import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.navbar}>
        <NavbarIcon />
        <Typography component='span' className={classes.navText}>START SLIDESHOW</Typography>
      </Toolbar>
      <div className={classes.rectangle} />
    </AppBar>
  );
}

export default Navbar;
