import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Tooltip } from '@material-ui/core';
import MinimizeIcon from '@material-ui/icons/Minimize';
import useWindowWidth from '../../hook/useWindowWidth';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '30vh',
        backgroundColor: '#F6B2FF',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/milkyway.jpg'})`,
        backgroundBlendMode: 'multiply',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '4rem',
    },
    contactTitle: {
        color: '#fff',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        marginBottom: '6rem',
        marginLeft: '6rem',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '40%',
            marginLeft: '1.5rem',
        },
    },
    cosmic: {
        color: '#00ffea',
    },
    bar: {
        color: '#00ffea',
        fontSize: '2.5rem',
        marginBottom: '-0.31rem',
        marginRight: '-0.5rem',
    },
    contact: {
        color: '#00ffea',
        textDecoration: 'none',
        fontSize: '2.5rem',
        fontWeight: 'bolder',
        marginTop: '6rem',
        marginRight: '6rem',
        transition: 'all .5s ease-in-out',
        '&:hover': {
            textShadow: '0 0 3px #fff',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '6rem',
            marginRight: '1.5rem',
        },
    },
    email: {
        color: '#00ffea',
        fontSize: '1.1rem',
        fontWeight: 'normal',
        marginTop: '-0.5rem',
        marginLeft: '7rem',
      },
}));

function ContactMe() {
    const classes = useStyles();
    const window = useWindowWidth();

    return (
        <div className={classes.root} id='contactMe'>
            <Typography
            className={classes.contactTitle}
            >
                A creative <br /> 
                problem solver <br /> 
                affinity for the 
                <span className={classes.cosmic}>_cosmic</span>
            </Typography>
            <Tooltip title="Let's connect" arrow>
                <a target='_blank'
                    rel='noopener noreferrer'
                    href='mailto:brysonpalmer@gmail.com'
                    className={classes.contact}>
                        <MinimizeIcon className={classes.bar} >_</MinimizeIcon>
                        contact 
                        {(window.width <= 1024) && (
                            <p className={classes.email}>email</p>
                        )}
                </a>
            </Tooltip>
        </div>
    )
}

export default ContactMe;
