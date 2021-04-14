import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#fff',
    },
}));

function About() {
    const classes = useStyles();
   

    return (
        <div className={classes.root} id='about'>
            Hello!!!
        </div>
    )
}

export default About;
