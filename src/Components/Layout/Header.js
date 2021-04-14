import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/milkyway.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    appbar: {
        background: 'none',
    },
    appbarWrapper: {
        width: '90%',
        fontSize: '90%',
        margin: '0 auto',
    },
    appbarName: {
        flexGrow: '1',
    },
    appbarPortfolio: {
       color: '#6bf9b9',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    container: {
        textAlign: 'center',
    },
    welcome: {
        color: '#fff',
        fontSize: '4.5rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '3.5rem',
        },
        [theme.breakpoints.down('415')]: {
            fontSize: '2rem',
        }
    },
    arrowDown: {
        color: '#6bf9b9',
        fontSize: '4rem',
    },
}));

function Header() {
    const classes = useStyles();

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root} id='header'>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarName}>
                        Bryson Palmer <br /> 
                        <span className={classes.appbarPortfolio}>Portfolio</span>
                    </h1>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
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
                        My <span className={classes.appbarPortfolio}>Portfolio</span>
                    </h1>
                    <Scroll to="go-to-work" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.arrowDown}/>
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    )
}

export default Header
