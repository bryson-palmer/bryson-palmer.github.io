import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MinimizeIcon from '@material-ui/icons/Minimize';
import useWindowWidth from '../../hook/useWindowWidth';

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
        position: 'relative',
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
    title: {
        color: '#fff',
        fontSize: '2rem',
        fontWeight: 'bold',
        fontFamily: 'Righteous, cursive',
        position: 'absolute',
        top: '5%',
        right: '0%',
        bottom: '0%',
        left: '7%',
        zIndex: 2,
        [theme.breakpoints.down('md')]: {
            left: '4%',
        },
        [theme.breakpoints.down('xs')]: {

            fontSize: '1.5rem',
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
    profileB: {
        position: 'absolute',
        top: 20,
        right: 0,
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/profileB.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '30vh',
        backgroundPosition: 'center 57%',
        filter: 'drop-shadow(2px -2px 2px rgba(246, 178, 255, 0.5 ))', // rgb(0, 255, 234, 0.7) 
        backgroundAttachment: 'fixed',
        height: '39.6vh',
        width: '93.5vw',
        zIndex: 0,
        [theme.breakpoints.down('lg')]: {
            backgroundPosition: 'center 60%',
            height: '39.6vh',
            top: 14,
        },
        [theme.breakpoints.down('1025')]: {
            backgroundPosition: 'center 60%',
            backgroundAttachment: 'local',
            height: '40vh',
            backgroundSize: '28vh',
        },
        [theme.breakpoints.down('sm')]: {
            backgroundPosition: 'center 0%',
            height: '39.9vh',
            backgroundSize: '27vh',
            top: 9,
        },
        [theme.breakpoints.down('845')]: {
            height: '39vh',
        },
        [theme.breakpoints.down('824')]: {
            height: '39.6vh',
        },
        [theme.breakpoints.down('813')]: {
            height: '39vh',
        },
        [theme.breakpoints.down('770')]: {
            backgroundPosition: 'center 10%',
            height: '39.9vh',
            backgroundSize: '27vh',
            top: 9,
        },
        [theme.breakpoints.down('737')]: {
            backgroundPosition: 'center 50%',
            height: '39.3vh',
            backgroundSize: '27vh',
            top: 9,
        },
        [theme.breakpoints.down('721')]: {
            height: '39.9vh',
        },
        [theme.breakpoints.down('668')]: {
            height: '39.1vh',
        },
        [theme.breakpoints.down('654')]: {
            height: '38vh',
        },
        [theme.breakpoints.down('641')]: {
            height: '38.7vh',
        },
        [theme.breakpoints.down('xs')]: {
            backgroundPosition: 'center 200%',
            height: '39.3vh',
            backgroundSize: '26vh',
            top: 7,
        },
        [theme.breakpoints.down('541')]: {
            height: '39.9vh',
        },
        [theme.breakpoints.down('415')]: {
            backgroundPosition: 'center 200%',
            height: '39.7vh',
        },
        [theme.breakpoints.down('321')]: {
            top: 6,
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

}));

export default function ContactMe() {
    const classes = useStyles();
    const windowY = useWindowWidth().height;
    const windowX = useWindowWidth().width;

    return (
        <div
            className={classes.root}
            id='contact-me'
            style={{
                width: windowX > windowY && '85vw',
                height:
                    (windowX > windowY && windowX < 845 && '80vh')
            }}
        >
            <div
                className={classes.middle}
                style={{
                    height:
                        (windowX > windowY && windowX < 845 && '82.5vh')
                }}
            >
                <div
                    className={classes.inner}
                    style={{
                        height:
                            (windowX > windowY && windowX < 845 && '85.3vh')
                    }}
                >
                    <Typography
                        className={classes.title}
                        style={{
                            fontSize:
                                windowX > windowY &&
                                windowX < 850 && '1.2rem',
                            top:
                                windowX > windowY &&
                                windowX < 850 && '15%'
                        }}
                    >
                        Let's build the
                        <MinimizeIcon
                            className={classes.bar}
                            style={{
                                fontSize:
                                    windowX > windowY &&
                                    windowX < 850 && '1.2rem',
                                marginBottom:
                                    windowX > windowY &&
                                    windowX < 850 && '-0.16rem',
                                marginRight:
                                    windowX > windowY &&
                                    windowX < 850 && '-0.4rem'
                            }}
                        >_</MinimizeIcon>
                        <span className={classes.cosmic}>future</span>
                    </Typography>
                    <div
                        className={classes.profileB}
                        style={{
                            backgroundSize:
                                (windowX > windowY && windowX < 845 && '60vh'),
                            height:
                                (windowX > windowY && windowX < 845 && '79.5vh'),
                            backgroundPosition:
                                (windowX > windowY && windowX < 570 && 'center 50%')
                        }}
                    >
                    </div>
                </div>
            </div>
        </div>
    )
}