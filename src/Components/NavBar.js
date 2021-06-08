import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MinimizeIcon from '@material-ui/icons/Minimize';
import { Link as Scroll } from 'react-scroll';
import useWindowWidth from '../hook/useWindowWidth';

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'none',
        position: 'absolute',
    },
    appbarWrapper: {
        minWidth: '100vw',
        fontSize: '90%',
        margin: '0 auto',
    },
    appbarName: {
        maxWidth: '50%',
        flexGrow: '1',
        lineHeight: '2rem',
        [theme.breakpoints.down('415')]: {
            fontSize: '1.1rem',
            lineHeight: '1.5rem',
        },
        [theme.breakpoints.down('281')]: {
            fontSize: '0.9rem',
        },
    },
    appbarPortfolio: {
        color: '#00ffea',
        textDecoration: 'none',
        transition: 'all .5s ease-in-out',
        '&:hover': {
            textDecoration: 'none',
            textShadow: '0 0 3px #fff',
        },
        [theme.breakpoints.down('281')]: {
            fontSize: '0.9rem',
        },
    },
    navLinks: {
        flexGrow: '1',
        lineHeight: '1.5rem',
        display: 'flex !important',
        justifyContent: 'flex-end !important',
        alignContent: 'flex-end !important',
        alignItems: 'flex-end !important',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column !important',
        },
        [theme.breakpoints.down('281')]: {
            lineHeight: '1.2rem',
        },
    },
    link: {
        color: '#00ffea',
        textDecoration: 'none',
        fontSize: '1.5rem',
        fontWeight: 'bolder',
        fontFamily: 'Righteous, cursive',
        transition: 'all .5s ease-in-out',
        padding: '0 1rem !important',
        textAlign: 'right',
        '&:hover': {
            textDecoration: 'none',
            textShadow: '0 0 3px #fff',
        },
        [theme.breakpoints.down('415')]: {
            fontSize: '1.2rem',
        },
        [theme.breakpoints.down('281')]: {
            fontSize: '0.9rem',
        },
    },
    bar: {
        color: '#00ffea',
        fontSize: '1.5rem',
        marginBottom: '-0.2rem',
        marginRight: '-0.3rem',
        [theme.breakpoints.down('457')]: {
            fontSize: '1.1rem',
            marginBottom: '-0.1rem',
            marginRight: '-0.2rem',
        },
        [theme.breakpoints.down('361')]: {
            fontSize: '1.1rem',
            marginBottom: '-0.1rem',
        },
        [theme.breakpoints.down('281')]: {
            marginBottom: '-0.2rem',
        },
    },
}));

export default function NavBar() {
    const classes = useStyles();
    const windowX = useWindowWidth().width;

    return (
        <AppBar className={classes.appbar} elevation={0}>
                        
            <Toolbar className={classes.appbarWrapper}>
                            
                <h1 className={classes.appbarName}>
                    Bryson Palmer <br />
                    <Link 
                        to={'/portfolio'}
                        className={classes.appbarPortfolio}>
                            Portfolio
                    </Link>
                </h1>

                <Typography className={classes.navLinks}>                               
                    <Link
                        to={'/about'}
                        className={classes.link}>
                            <MinimizeIcon className={classes.bar} />
                                about
                    </Link>
                    <Scroll to='contact-me' smooth={true}> 
                        <IconButton
                            className={classes.link}
                            >
                                <MinimizeIcon 
                                    className={classes.bar} 
                                    style={{ marginRight: windowX > 470 ? '-0.37rem': '-0.25rem',
                                        marginBottom: windowX > 470 ? '0.1rem': '-0.1rem'}} />
                                    contact
                        </IconButton>
                    </Scroll>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

