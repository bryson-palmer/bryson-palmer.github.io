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
        minWidth: '99.3%',
        height: '41.5vh',
        border: '1px solid #00ffea',
        borderRadius: '8px',
        margin: '0 auto',
        marginTop: '-0.5rem',
    },
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        // alignItems: 'flex-end',
        width: '99.3%',
        height: '43vh',
        border: '1px solid #F6B2FF',
        borderRadius: '8px',
        margin: '0 auto',
        marginTop: '-0.5rem',
    },
    contactTitle: {
        color: '#fff',
        fontSize: '2rem',
        fontWeight: 'bold',
        maxWidth: '50%',
        alignSelf: 'flex-start',
        marginTop: '1rem',
        marginLeft: '5rem',
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
        backgroundPosition: 'center 100%',
        filter: 'drop-shadow(0px 0px 15px rgba(246, 178, 255, 0.5))',
        backgroundAttachment: 'fixed',
        height: '60vh',
        width: '100vw',
        zIndex: 0,
        [theme.breakpoints.down('md')]: {
            // backgroundSize: '31vh',
            backgroundPosition: 'center 119%',
        },
        [theme.breakpoints.down('1023')]: {
            // backgroundSize: '39vh',
            backgroundPosition: 'center 85%',
        },
        [theme.breakpoints.down('xs')]: {
            // backgroundSize: '42vh',
            backgroundPosition: 'center 25%',
        },
        [theme.breakpoints.down('600')]: {
            // backgroundSize: '42vh',
            backgroundPosition: 'center 75%',
        },
        [theme.breakpoints.down('600')]: {
            // backgroundSize: '42vh',
            backgroundPosition: 'center 75%',
        },
        [theme.breakpoints.down('541')]: {
            // backgroundSize: '45vh',
            backgroundPosition: 'center 35%',
        },
        [theme.breakpoints.down('412')]: {
            // backgroundSize: '45vh',
            backgroundPosition: 'center 45%',
        },
        [theme.breakpoints.down('376')]: {
            // backgroundSize: '31vh',
            backgroundPosition: 'center 65%',
        },
        [theme.breakpoints.down('361')]: {
            // backgroundSize: '31vh',
            backgroundPosition: 'center 17%',
        },
        [theme.breakpoints.down('321')]: {
            // backgroundSize: '31vh',
            backgroundPosition: 'center -10%',
        },
        [theme.breakpoints.down('281')]: {
            // backgroundSize: '31vh',
            backgroundPosition: 'center 35%',
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
        alignSelf: 'flex-end',
        marginBottom: '3rem',
        marginRight: '6rem',
        zIndex: 2,
        transition: 'all .5s ease-in-out',
        '&:hover': {
            textShadow: '0 0 3px #fff',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem', 
        },
        [theme.breakpoints.down('xs')]: {
            // marginTop: '3rem',
            marginRight: '0.5rem',
        },
        [theme.breakpoints.down('415')]: {
            fontSize: '1.2rem',
            // marginTop: '4rem',
            marginRight: '1rem',
        },
        [theme.breakpoints.down('376')]: {
            // fontSize: '1.2rem',
            // marginTop: '2rem',
            // marginRight: '1rem',
        },
        [theme.breakpoints.down('321')]: {
            fontSize: '0.9rem',
          },
        // [theme.breakpoints.down('281')]: {
        //     fontSize: '0.9rem',
        // },
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
                        <span className={classes.cosmic}>_future</span>
                    </Typography>
                    <div 
                        className={classes.portrait}
                        style={{}}
                    >
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
