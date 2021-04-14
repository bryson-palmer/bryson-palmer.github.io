import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    git: {
        color: '#fff',
    },
    linked: {
        color: '#fff',
    },
    resume: {
        color: '#fff',
    },
    copyright: {
        color: '#fff',
        textAlign: "center",
        paddingBottom: '2rem',
        fontSize: '0.8rem',
    }
}));

function Copyright() {
    const classes = useStyles();
    return (
      <Typography className={classes.copyright} >
        {'© '}
        {new Date().getFullYear()}
        {' Bryson Palmer | Full-Stack | Developer'}
      </Typography>
    );
}

function Footer() {
    const classes = useStyles();
    
    return (
        <div>
            <div className={classes.root}>
                <Tooltip title='GitHub' arrow>
                    <IconButton
                        aria-label='GitHub.com'
                        onClick={() => window.open('https://github.com/bryson-palmer', '_blank')}>
                        <GitHubIcon className={classes.git} />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Linkedin' arrow>
                    <IconButton 
                        aria-label='Linkedin.com' 
                        onClick={() => window.open('https://www.linkedin.com/in/bryson-palmer-555b3862/', '_blank')}>
                        <LinkedInIcon className={classes.linked} />
                    </IconButton>
                </Tooltip>
                <Tooltip title='My Resume' arrow>
                    <IconButton
                        aria-label='My Resume'
                        onClick={() => window.open('https://docs.google.com/document/d/19WL4DclHMyKQ1_jmdgUm_kBA3A-d0P4o2hpSkjHySFw/edit?usp=sharing', '_blank')}>
                        <ListAltIcon className={classes.resume} />
                    </IconButton>
                </Tooltip>
            </div>
            <Copyright />
        </div>
    )
}

export default Footer;
