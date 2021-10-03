import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  Avatar,
  CardContent,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './Images/aboutus.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  mainDiv: {
    border: '0px red solid',
    marginTop: '2rem',
    marginLeft: '2rem',
    marginRight: '2rem'
  },
  userCard: {
    marginTop: '5rem',
    marginLeft: '10rem',
    marginRight: '10rem',
    marginBottom: '2rem'
  },
  imageUploadCard: {
    boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.33)",
    marginLeft: '10rem',
    marginRight: '1rem'
  },
  fileUploadCard: {
    boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.33)",
    marginRight: '10rem',
    marginLeft: '1rem'
  },
  cardShadow: {
    boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.33)"
  },
  welcomeCard: {
    height: "20rem",
    width: "20rem",
    marginTop: "10rem",
    marginLeft: "13rem",
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Creatives
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <Grid container md={12} xs={12} >
          <Grid item md={4} xs={12} spacing={2} >
            <div className={classes.welcomeCard}>
              <Typography variant="h4">
                We Are Creatives.....
              </Typography> <br />
              <Typography variant="caption">
                Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.
              </Typography> <br />
              <div>
                <br />
                <Box display="flex" justifyContent="flex-end">
                  <Button variant="outlined" size="large" style={{ marginRight: '0.5rem' }} >Explore</Button>
                </Box>
              </div>
            </div>
          </Grid>
          <Grid item md={8} xs={12} spacing={2} >
            <img src={logo} alt="Logo" width={"60%"} height={"80%"} style={{ marginTop: '4rem', marginRight: '15rem', float: "right" }} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
