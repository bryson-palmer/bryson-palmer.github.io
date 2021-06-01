import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30vh'
        // minHeight: '100vh',
        // minWidth: '100vw',
    },
}));

export default function AboutMe() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Hello, my name is Bryson</h1>
            <p></p>
            <h2>Skills</h2>
            <ul>
                <li>Adaptable</li>
                <li>Attention-to-detail</li>
                <li>Balance Design &amp; Functionality</li>
                <li>Collaborative</li>
                <li>Customer Service Savvy</li>
                <li>Passionate</li>
                <li>Problem Solver</li>
                <li>Self-Motivated &amp; Teachable</li>
                <li>Strong Communicator</li>
            </ul>
        </div>           
    );
}
