import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse, Typography, Link, Fade }
    from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MinimizeIcon from '@material-ui/icons/Minimize';
import VizSensor from 'react-visibility-sensor';
import { Link as Scroll } from 'react-scroll';
import useWindowWidth from '../../hook/useWindowWidth';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/milkyway.jpg'})`,
        backgroundBlendMode: 'multiply',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    appbar: {
        background: 'none',
        position: 'absolute',
    },
    appbarWrapper: {
        width: '90%',
        fontSize: '90%',
        margin: '0 auto',
    },
    appbarName: {
        flexGrow: '1',
        lineHeight: '1.5rem',
        [theme.breakpoints.down('361')]: {
            fontSize: '1.1rem',
            lineHeight: '1.1rem'
        },
    },
    appbarPortfolio: {
        color: '#00ffea',
    },
    aboutContent: {
        color: '#00ffea',
        textDecoration: 'none',
        fontSize: '1.5rem',
        fontWeight: 'bolder',
        transition: 'all .5s ease-in-out',
        '&:hover': {
            textDecoration: 'none',
            textShadow: '0 0 3px #fff',
        },
        [theme.breakpoints.down('361')]: {
            fontSize: '1.1rem',
        },
    },
    bar: {
        color: '#00ffea',
        fontSize: '1.5rem',
        marginBottom: '-0.2rem',
        marginRight: '-0.3rem',
        [theme.breakpoints.down('361')]: {
            fontSize: '1.1rem',
        },
    },
    container: {
        textAlign: 'center',
    },
    welcome: {
        color: '#fff',
        fontSize: '4.5rem',
        lineHeight: '5rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
            lineHeight: '2rem'
        },
    },
    arrowDown: {
        color: '#00ffea',
        fontSize: '4rem',
    },
}));

export default function Header() {
    const classes = useStyles();
    const windowY = useWindowWidth().height;
    const windowX = useWindowWidth().width;

    const preventDefault = (event) => event.preventDefault();

    // State for fading in and out the header
    const [activeHeader, setActiveHeader] = useState(true);

    // State for helping delay welcome message by delaying check
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return (

        <VizSensor
            partialVisibility={true}
            offset={{ top: windowX < windowY ? 500 : 250}}
            scrollDelay={10}
            onChange={(isVisible) => {
                setActiveHeader(isVisible);
            }}
        >
            <Fade in={activeHeader} timeout={1500}  >
                <div 
                    className={classes.root} 
                    style={{backgroundColor: checked ? '#F6B2FF' : '#1c1c1c'}}
                    id='header'>
                    <AppBar className={classes.appbar} elevation={0}>
                        <Toolbar className={classes.appbarWrapper}>
                            <h1 className={classes.appbarName}>
                                Bryson Palmer <br />
                                <span className={classes.appbarPortfolio}>Portfolio</span>
                            </h1>
                            <Typography>
                                <Link
                                    href='../aboutContent'
                                    onClick={preventDefault}
                                    className={classes.aboutContent}>
                                    <MinimizeIcon className={classes.bar} />
                                        about
                                </Link>
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <Collapse
                        in={checked}
                        {... (checked ? { timeout: 4000 } : {})}
                        collapsedHeight={25}
                    >
                        <div className={classes.container}>
                            <h1 className={classes.welcome}>
                                Welcome to <br />
                                My Portfolio
                            </h1>
                            <Scroll to='go-to-work' smooth={true}>
                                <IconButton>
                                    <ExpandMoreIcon className={classes.arrowDown} />
                                </IconButton>
                            </Scroll>
                        </div>
                    </Collapse>
                </div>
            </Fade>
        </VizSensor>

    )
}
