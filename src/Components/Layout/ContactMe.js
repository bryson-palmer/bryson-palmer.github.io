import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Tooltip } from '@material-ui/core';
import MinimizeIcon from '@material-ui/icons/Minimize';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '40vh',
        width: '95vw',
        backgroundColor: '#F6B2FF',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/milkyway.jpg'})`,
        backgroundBlendMode: 'multiply',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin: '9rem auto',
        position: 'relative',
        border: '1px solid #fff',
        borderRadius: '8px',
    },
    middle: {
        width: '99.4%',
        height: '40.8vh',
        border: '1px solid #00ffea',
        borderRadius: '8px',
        margin: '0 auto',
        marginTop: '-0.6rem',
        [theme.breakpoints.down('lg')]: {
            width: '99.2%',
            height: '41.3vh',
            marginTop: '-0.5rem',
        },
        [theme.breakpoints.down('md')]: {
            width: '98.8%',
        },
        [theme.breakpoints.down('1025')]: {
            width: '98.5%',
            height: '41.2vh',
            marginTop: '-0.6rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '98.8%',
            height: '41vh',
            marginTop: '-0.4rem',
        },
        [theme.breakpoints.down('541')]: {
            height: '41.2vh',
            marginTop: '-0.3rem',
        },
        [theme.breakpoints.down('412')]: {
            width: '98%',
            height: '41.35vh',
            marginTop: '-0.35rem',
        },
        [theme.breakpoints.down('376')]: {
            height: '41.15vh',
            marginTop: '-0.35rem',
        },
        [theme.breakpoints.down('361')]: {
            width: '97.5%',
            height: '41.5vh',
            marginTop: '-0.35rem',
        },
        [theme.breakpoints.down('321')]: {
            width: '98%',
            height: '41.4vh',
            marginTop: '-0.3rem',
        },
        [theme.breakpoints.down('281')]: {
            height: '41.2vh',
        },
    },
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '99.4%',
        height: '41.7vh',
        border: '1px solid #F6B2FF',
        borderRadius: '8px',
        margin: '0 auto',
        marginTop: '-0.6rem',
        [theme.breakpoints.down('lg')]: {
            width: '99.2%',
            height: '42.4vh',
            marginTop: '-0.4rem',
        },
        [theme.breakpoints.down('md')]: {
            width: '98.8%',
        },
        [theme.breakpoints.down('1025')]: {
            width: '98.5%',
            height: '42.4vh',
            marginTop: '-0.6rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '98.5%',
            height: '42.1vh',
            marginTop: '-0.4rem',
        },
        [theme.breakpoints.down('541')]: {
            width: '98.6%',
            height: '42.2vh',
            marginTop: '-0.3rem',
        },
        [theme.breakpoints.down('415')]: {
            width: '97.8%',
            height: '42.6vh',
            marginTop: '-0.35rem',
        },
        [theme.breakpoints.down('376')]: {
            height: '42.3vh',
            marginTop: '-0.35rem',
        },
        [theme.breakpoints.down('361')]: {
            height: '43vh',
            marginTop: '-0.36rem',
        },
        [theme.breakpoints.down('321')]: {
            height: '42.8vh',
            marginTop: '-0.3rem',
        },
        [theme.breakpoints.down('281')]: {
            width: '97.5%',
            height: '42.4vh',
        },
    },
    contactTitle: {
        color: '#fff',
        fontSize: '2rem',
        fontWeight: 'bold',
        fontFamily: 'Righteous, cursive',
        maxWidth: '50%',
        alignSelf: 'flex-start',
        marginTop: '1rem',
        marginLeft: '4rem',
        zIndex: 2,
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem', 
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '40%',
            marginLeft: '1.5rem',
        },
        [theme.breakpoints.down('415')]: {
            fontSize: '1.2rem',
        },
        [theme.breakpoints.down('321')]: {
            fontSize: '0.9rem',
          },
    },
    cosmic: {
        color: '#00ffea',
    },
    portrait: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/portrait.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '47vh',
        backgroundPosition: 'center 115%',
        filter: 'drop-shadow(0px 0px 15px rgba(246, 178, 255, 0.5))',
        backgroundAttachment: 'fixed',
        height: '50vh',
        width: '100vw',
        zIndex: 0,
        [theme.breakpoints.down('1025')]: {
            backgroundPosition: 'center 25%',
            backgroundAttachment: 'local',
        },
        [theme.breakpoints.down('sm')]: {
            backgroundPosition: 'center 27%',
        },
    },
    bar: {
        color: '#00ffea',
        fontSize: '2.5rem',
        marginBottom: '-0.29rem',
        marginRight: '-0.6rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem',
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
        color: '#00ffea',
        textDecoration: 'none',
        fontSize: '2rem',
        fontWeight: 'bolder',
        fontFamily: 'Righteous, cursive',
        alignSelf: 'flex-end',
        marginBottom: '2rem',
        marginRight: '5rem',
        zIndex: 2,
        transition: 'all .5s ease-in-out',
        '&:hover': {
            textShadow: '0 0 3px #fff',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem', 
        },
        [theme.breakpoints.down('xs')]: {
            marginRight: '0.5rem',
        },
        [theme.breakpoints.down('415')]: {
            fontSize: '1.2rem',
            marginRight: '1rem',
        },
        [theme.breakpoints.down('321')]: {
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
            <div className={classes.middle}>
                <div className={classes.inner}>
                    <Typography
                        className={classes.contactTitle}
                    >
                        Let's build the 
                        <MinimizeIcon className={classes.bar} >_</MinimizeIcon>
                        <span className={classes.cosmic}>future</span>
                    </Typography>
                    <div 
                        className={classes.portrait}>
                    </div>
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
            </div>
        </div>
    )
}