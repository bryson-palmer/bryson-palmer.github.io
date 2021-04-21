import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse, Typography, Link, Fade } 
    from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MinimizeIcon from '@material-ui/icons/Minimize';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        minHeight: '100vh',
        backgroundColor: '#F6B2FF',
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
    },
    appbarPortfolio: {
        color: '#00ffea',
    },
    about: {
        color: '#00ffea',
        textDecoration: 'none',
        fontSize: '1.5rem',
        fontWeight: 'bolder',
        transition: 'all .5s ease-in-out',
        '&:hover': {
            textDecoration: 'none',
            textShadow: '0 0 3px #fff',
        },
    },
    bar: {
        color: '#00ffea',
        fontSize: '1.5rem',
        marginBottom: '-0.2rem',
        marginRight: '-0.3rem',
    },
    container: {
        textAlign: 'center',
    },
    welcome: {
        color: '#fff',
        fontSize: '4.5rem',
        lineHeight: '5rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '3.5rem',
            lineHeight: '4rem',
        },
        [theme.breakpoints.down('415')]: {
            fontSize: '2rem',
            lineHeight: '2.5rem'
        },
    },
    arrowDown: {
        color: '#00ffea',
        fontSize: '4rem',
    },
}));

export default function Header() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    // State for fading in and out the header
    const [fadeHeader, setFadeHeader] = useState(true);

    // State for checking 
    const [checked, setChecked] = useState(false);

    // Handle Fade change
    const handleChange = () => {
        setFadeHeader((prev) => !prev);
      }

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root} id='header'>
            <Fade in={fadeHeader}>
                <AppBar className={classes.appbar} elevation={0}>
                    <Toolbar className={classes.appbarWrapper}>
                        <h1 className={classes.appbarName}>
                            Bryson Palmer <br /> 
                            <span className={classes.appbarPortfolio}>Portfolio</span>
                        </h1>
                        <Typography>
                            <Link 
                                href='../about'
                                onClick={preventDefault}
                                className={classes.about}>
                                    <MinimizeIcon className={classes.bar}/>
                                    about
                            </Link>
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Collapse 
                    in={checked} 
                    { ... (checked ? { timeout: 3000 } : {})} 
                    collapsedHeight={50}
                >
                    <div className={classes.container}>
                        <h1 className={classes.welcome}>
                            Welcome to <br /> 
                            My Portfolio
                        </h1>
                        <Scroll to="go-to-work" smooth={true}>
                            <IconButton>
                                <ExpandMoreIcon className={classes.arrowDown}/>
                            </IconButton>
                        </Scroll>
                    </div>
                </Collapse>
            </Fade>
        </div>
    )
}
