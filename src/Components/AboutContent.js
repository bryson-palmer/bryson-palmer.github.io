import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#fff',
    },
}));

export default function AboutContent() {
    const classes = useStyles();
   

    return (
        <div className={classes.root} id='aboutContent'>
            Hello!!!
        </div>
    )
}
