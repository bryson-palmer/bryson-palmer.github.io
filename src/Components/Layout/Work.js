import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {    
        margin: '1rem 1rem 0 1rem',
        flexGrow: 1, 
    },
    myContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            
        }
    },
    paper: {
        padding: theme.spacing(14),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

}));

export default function Work() {
    const classes = useStyles();
  
    function FormRow() {
      return (
        <React.Fragment>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>
        </React.Fragment>
      );
    }
  
    return (
      <div className={classes.root}>
        <Grid className={classes.myContainer} container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
    );
  }