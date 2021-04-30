
import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      maxWidth: '100%',
      // height: ''
    },
  }));
export default function Footer() {
    const classes = useStyles();



  return (
    <div className={classes.root}>
    <Grid container spacing={1}>
      <Grid item xs={12}>

        <Paper className={classes.paper}>Web App </Paper>
        <Paper className={classes.paper}>Timothy Lam 18022038D </Paper>
        <Paper className={classes.paper}>Chow Ka King 18054045D </Paper>

      </Grid>
    </Grid>
  </div>
  );
    
}