import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ListAltIcon from '@material-ui/icons/ListAlt';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    git: {
        color: '#fff',
    },
    linked: {
        color: '#fff',
    },
    resume: {
        color: '#fff',
    }
}));

function Footer() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <IconButton>
                <GitHubIcon className={classes.git} />
            </IconButton>
            <IconButton>
                <LinkedInIcon className={classes.linked} />
            </IconButton>
            <IconButton>
                <ListAltIcon className={classes.resume} />
            </IconButton>
        </div>
    )
}

export default Footer;
