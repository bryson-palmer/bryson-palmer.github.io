import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Tooltip } from '@material-ui/core';
import MinimizeIcon from '@material-ui/icons/Minimize';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '40vh',
        backgroundColor: '#F6B2FF',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/milkyway.jpg'})`,
        backgroundBlendMode: 'multiply',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '1rem',
    },
    contactTitle: {
        color: '#fff',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        maxWidth: '50%',
        marginBottom: '6rem',
        marginLeft: '6rem',
        [theme.breakpoints.down('md')]: {
            marginTop: '1rem', 
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '40%',
            marginLeft: '1.5rem',
        },
        [theme.breakpoints.down('321')]: {
            fontSize: '0.9rem',
            marginBottom: '4rem',
            maxWidth: '50%',
          },
    },
    cosmic: {
        color: '#00ffea',
    },
    // portrait: {
    //     position: 'relative',
    //     backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/portrait.png'})`,
    //     backgroundColor: 'transparent',
    //     backgroundBlendMode: 'multiply',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: '100%',
    //     marginBottom: '5rem',
    //     backgroundPosition: 'center 35%',
    //     backgroundAttachment: 'local',
    //     height: '50vh',
    //     width: '30vw',
    //     border: '1px solid #00ffea',
    //     borderRadius: '3%',

    // },
    bar: {
        color: '#00ffea',
        fontSize: '2.5rem',
        marginBottom: '-0.29rem',
        marginRight: '-0.6rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem',
            marginBottom: '-0.2rem',
            marginRight: '-0.5rem',
        },
        [theme.breakpoints.down('415')]: {
            fontSize: '1.2rem',
            marginBottom: '-0.2rem',
            marginRight: '-0.3rem',
        },
        [theme.breakpoints.down('321')]: {
            fontSize: '1.4rem',
        },
        [theme.breakpoints.down('281')]: {
            fontSize: '0.9rem',
            marginBottom: '-0.15rem',
            marginRight: '-0.25rem',
        },
    },
    contact: {
        position: 'relative',
        bottom: -80,
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
            fontSize: '2rem',
            marginTop: '6rem',
            marginRight: '1.5rem',
        },
        [theme.breakpoints.down('415')]: {
            fontSize: '1.2rem',
            marginTop: '5rem',
            marginRight: '1rem',
        },
        [theme.breakpoints.down('281')]: {
            fontSize: '0.9rem',
        },
    },
    EmailOutlinedIcon: {
        color: '#00ffea',
        fontSize: '1.4rem',
        fontWeight: 'normal',
        marginBottom: '0.6rem',
        marginLeft: '0.2rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
            marginLeft: '0.1rem',
            marginBottom: '0.5rem',
        },
        [theme.breakpoints.down('415')]: {
            fontSize: '0.9rem',
            marginBottom: '0.3rem',
        },
        [theme.breakpoints.down('321')]: {
            fontSize: '0.8rem',
        },
        [theme.breakpoints.down('281')]: {
            marginBottom: '0.1rem',
        },
    },
}));

export default function ContactMe() {
    const classes = useStyles();

    return (
        <div className={classes.root} id='contact-me'>
            <Typography
            className={classes.contactTitle}
            >
                A creative <br /> 
                problem solver <br /> 
                affinity for the 
                <span className={classes.cosmic}>_cosmic</span>
            </Typography>
            {/* <div className={classes.portrait}></div> */}
            <Tooltip title="Let's connect" arrow>
                <a target='_blank'
                    rel='noopener noreferrer'
                    href='mailto:brysonpalmer@gmail.com'
                    className={classes.contact}>
                        <MinimizeIcon className={classes.bar} >_</MinimizeIcon>
                        contact 
                </a>
            </Tooltip>
        </div>
    )
}
