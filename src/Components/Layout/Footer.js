import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography, Tooltip } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ListAltIcon from '@material-ui/icons/ListAlt';
import useWindowWidth from '../../hook/useWindowWidth';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icons: {
        color: '#fff',
        fontWeight: 'bold',
        lineHeight: '0.5rem',
        margin: '0 1rem',
    },
    icon: {
        color: '#fff',
        marginTop: '-0.8rem'
    },
    copyright: {
        color: '#fff',
        textAlign: "center",
        marginTop: '0.5rem',
        paddingBottom: '2rem',
        fontSize: '0.8rem',
    },
    color: {
        color: '#00ffea',
    }
}));

function Copyright() {
    const classes = useStyles();
    return (
      <Typography className={classes.copyright} >
        {'© '}
        {new Date().getFullYear()}
        {' '}
        <span className={classes.color}>|</span>
        {' Bryson Palmer '}
        <span className={classes.color}>|</span>
        {' Full-Stack '}
        <span className={classes.color}>|</span>
        {' Developer'}
      </Typography>
    );
}

export default function Footer() {
    const classes = useStyles();
    const windowX = useWindowWidth();
    
    return (
        <div>
            <div className={classes.root}>
                <div className={classes.icons}>
                    {(windowX.width <= 1024) && (
                        <p >GitHub</p>
                    )}
                    <Tooltip title='GitHub' arrow>
                        <IconButton
                            aria-label='GitHub.com'
                            onClick={() => window.open('https://github.com/bryson-palmer', '_blank')}>
                            <GitHubIcon className={classes.icon} />
                        </IconButton>
                    </Tooltip>
                </div>
                <div className={classes.icons}>
                    {(windowX.width <= 1024) && (
                        <p >linkedin</p>
                    )}
                    <Tooltip title='Linkedin' arrow>
                        <IconButton 
                            aria-label='Linkedin.com' 
                            onClick={() => window.open('https://www.linkedin.com/in/bryson-palmer-555b3862/', '_blank')}>
                            <LinkedInIcon className={classes.icon} />
                        </IconButton>
                    </Tooltip>
                </div>
                <div className={classes.icons}>
                    {(windowX.width <= 1024) && (
                        <p >Resume</p>
                    )}
                    <Tooltip title='My Resume' arrow>
                        <IconButton
                            aria-label='My Resume'
                            onClick={() => window.open('https://docs.google.com/document/d/19WL4DclHMyKQ1_jmdgUm_kBA3A-d0P4o2hpSkjHySFw/edit?usp=sharing', '_blank')}>
                            <ListAltIcon className={classes.icon} />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <Copyright />
        </div>
    )
}
