import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography, Tooltip } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ListAltIcon from '@material-ui/icons/ListAlt';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import useWindowWidth from '../../hook/useWindowWidth';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icons: {
        color: '#fff',
        fontWeight: 'bold',
        lineHeight: '0.5rem',
        margin: '0 1rem',
        [theme.breakpoints.down('281')]: {
            margin: '0 auto',
        }
    },
    icon: {
        color: '#fff',
        marginTop: '-0.8rem'
    },
    email: {
        paddingBottom: '0.7rem',
        marginLeft: '-0.4rem'
    },
    copyright: {
        color: '#fff',
        textAlign: "center",
        marginTop: '0.5rem',
        paddingBottom: '1rem',
        fontSize: '0.8rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '3rem',
            paddingBottom: '3rem',
        },
        [theme.breakpoints.down('321')]: {
            marginTop: '3rem',
            paddingBottom: '3rem',
            fontSize: '0.7rem',
        },
    },
    color: {
        color: '#00ffea',
    },
    moreInfo: {
        color: '#fff',
        textAlign: 'center',
        paddingBottom: '2rem',
    },
    readmeLink: {
        color: '#00ffea',
        '&:link': {
            textDecoration: 'none',
        },
        '&:hover': {
            textDecoration: 'underline',
            textShadow: '0 0 3px #fff',
        },
        '&:visited': {
            color: '#F6B2FF',
        },
        '&:active': {
            color: '#00ffea',
        }
    },
    line: {
        width: '50%',
        margin: '0rem auto',
        paddingBottom: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.5)',
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
            {' brysonpalmer@gmail.com '}
            <span className={classes.color}>|</span>
            {' Full-Stack '}
            <span className={classes.color}>|</span>
            {' Developer'}
        </Typography>
    );
}

function MoreInfo() {
    const classes = useStyles();
    return (
        <div className={classes.moreInfo}>
            <Tooltip title='Click Here to Check Out My Process' arrow>
                <a className={classes.readmeLink} 
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://github.com/bryson-palmer/bryson-palmer.github.io#readme'>
                        My process
                </a>
            </Tooltip>
                
            {' & '} 
            <Tooltip title='Click Here to Check Out My Resources' arrow>
                <a className={classes.readmeLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://github.com/bryson-palmer/bryson-palmer.github.io#resources'>
                        Resources
                </a>
            </Tooltip>
        </div>
    );
}

export default function Footer() {
    const classes = useStyles();
    const windowX = useWindowWidth();

    return (
        <div>
            <p className={classes.line}></p>
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
                    <Tooltip title='Resume' arrow>
                        <IconButton
                            aria-label='Resume'
                            onClick={() => window.open('https://docs.google.com/document/d/1szDUSA9ge0nsGIGbld_yJFam1ax_y-NDe0kkOCXN-DY/edit?usp=sharing', '_blank')}>
                            <ListAltIcon className={classes.icon} />
                        </IconButton>
                    </Tooltip>
                </div>
                <div className={classes.icons}>
                    {(windowX.width <= 1024) && (
                        <p className={classes.email}>Email</p>
                    )}
                    <Tooltip title='Eamil' arrow>
                        <a target='_blank'
                            rel='noopener noreferrer'
                            href='mailto:brysonpalmer@gmail.com'>
                            <EmailOutlinedIcon className={classes.icon}
                                style={{ marginBottom: windowX.width <= 1024 ? '0.6rem' : 0 }}
                            />
                        </a>
                    </Tooltip>
                </div>
            </div>
            <Copyright />
            <MoreInfo />
        </div>
    )
}