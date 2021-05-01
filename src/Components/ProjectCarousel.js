import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Fade } from '@material-ui/core';
import ItemsCarousel from 'react-items-carousel';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import useWindow from '../hook/useWindowWidth';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '0rem 40px',
        [theme.breakpoints.down('lg')]: {
            height: '67%',
        },
        [theme.breakpoints.down('960')]: {
            height: '45%',
        },
        [theme.breakpoints.down('877')]: {
            height: '75%',
        },
        [theme.breakpoints.down('769')]: {
            height: '60%',
        },
        [theme.breakpoints.down('721')]: {
            height: '55%',
        },
        [theme.breakpoints.down('668')]: {
            height: '70%',
        },
        [theme.breakpoints.down('654')]: {
            height: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            height: '85%',
        },
        [theme.breakpoints.down('541')]: {
            height: '70%',
        },
        [theme.breakpoints.down('415')]: {
            height: '85%',
        },
        [theme.breakpoints.down('376')]: {
            height: '80%',
        },
    },
    color: {
        color: '#00ffea',
    },
    closeButton: {
        position: 'fixed',
        top: '20px',
        left: '96.5%',
        [theme.breakpoints.down('lg')]: {
            top: '10px',
            left: '94%',
        },
        [theme.breakpoints.down('md')]: {
            left: '92%',
        },
        [theme.breakpoints.down('xs')]: {
            left: '87% !important',
        },
        [theme.breakpoints.down('321')]: {
            left: '83% !important',
        },
    },
    closeIcon: {
        fontSize: '3rem',
        color: '#00ffea',
        [theme.breakpoints.down('lg')]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.4rem',
        },
    },
    itemsCarousel: {
        width: '55%',
        marginTop: '-4rem',
        [theme.breakpoints.down('lg')]: {
            width: '45%',
            paddingBottom: '5rem',
            marginTop: '0rem',
        },
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '0rem',
            marginTop: '1rem',
        },
        [theme.breakpoints.down('xs')]: {
            width: '45%',
            marginTop: '2rem',
        },
        [theme.breakpoints.down('376')]: {
            width: '45%',
        },
    },
    chevron: {
        zIndex: theme.zIndex.drawer + 2,
        color: '#00ffea',
        fontSize: '4rem',
        backgroundColor: 'transparent !important',
        border: 'none !important',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem !important',
        },
    },
    image: {
        height: '100%',
        width: '85%',
        borderRadius: '10px',
    },
    details: {
        height: '50%',
        width: '40%',
        padding: '0 2rem',
        marginBottom: '-6rem',
        [theme.breakpoints.down('lg')]: {
            height: '95%',
            padding: '0 1rem',
        },
        [theme.breakpoints.down('md')]: {
            height: '90%',
            width: '45%',
        },
        [theme.breakpoints.down('sm')]: {
            height: '100%',
            width: '45%',
            padding: '0 0.6rem',
            marginBottom: '-2rem',
        },
        [theme.breakpoints.down('xs')]: {
            width: '45%',
            padding: '0 1rem',
            marginBottom: '-4rem',
        },
        [theme.breakpoints.down('415')]: {
            marginBottom: '-7rem',
        },
        [theme.breakpoints.down('376')]: {
            marginBottom: '-4rem',
        },
        [theme.breakpoints.down('361')]: {
            marginBottom: '-4rem',
        },
        [theme.breakpoints.down('321')]: {
            marginBottom: '0rem',
        },
    },
    title: {
        margin: '0',
        fontSize: '5rem',
        color: '#00ffea',
        [theme.breakpoints.down('lg')]: {
            fontSize: '4rem',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '3rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.down('281')]: {
            fontSize: '1.8rem',
        },
    },
    text: {
        color: '#FFF',
        fontSize: '1.8rem',
        lineHeight: '3rem',
        [theme.breakpoints.down('lg')]: {
            lineHeight: '2.3rem',
            fontSize: '1.2rem',
        },
        [theme.breakpoints.down('md')]: {
            lineHeight: '1.7rem',
            fontSize: '0.9rem',
        },
        [theme.breakpoints.down('sm')]: {
            lineHeight: '1.3rem',
            fontSize: '0.7rem',
        },
        [theme.breakpoints.down('xs')]: {
            lineHeight: '1.2rem',
            fontSize: '0.6rem',
        },
    },
    button: {
        width: '180px',
        color: '#00ffea',
        fontSize: '1.8rem',
        border: 'solid 1px #00ffea',
        margin: '2rem auto',
        [theme.breakpoints.down('lg')]: {
            fontSize: '1rem',
            width: '130px',
            margin: '1rem auto',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0.7rem auto',
            fontSize: '0.7rem',
            width: '100px',
        },
        [theme.breakpoints.down('415')]: {
            fontSize: '1rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.6rem',
        },
        [theme.breakpoints.down('321')]: {
            marginBottom: '4rem',
        },
    },
}));

export default function ProjectCarousel({ handleClose, project }) {
    const classes = useStyles();
    const windowY = useWindow().height;
    const windowX = useWindow().width;

    // State for fading in and out the header
    const [activeHeader, setActiveHeader] = useState(true);

    // State for active item in carousel
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    // width for carousel buttons
    const chevronWidth = 40;

    useEffect(() => {
        setActiveHeader(true);
    }, []);

    return (
        <Fade in={activeHeader} timeout={1500}  >
            <div 
                className={classes.root}
                style={{
                    flexDirection: windowY > windowX && 'column-reverse',
                    justifyContent: windowY > windowX && 'center'
                }}
            >
            
                <Button 
                    className={classes.closeButton} 
                    onClick={handleClose}
                    style={{
                        left: // (windowY > windowX) && 
                        (windowX <= 415) && '70%'}}
                >
                    <CloseRoundedIcon className={classes.closeIcon} />
                </Button>

                <div 
                    className={classes.itemsCarousel}
                    style={{
                        width: windowY > windowX && '85%',
                    }}
                >

                    <ItemsCarousel
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={1}
                        gutter={0}
                        infiniteLoop={true}
                        leftChevron={
                            <button className={classes.chevron}>
                                {'<'}
                            </button>
                        }
                        rightChevron={
                            <button className={classes.chevron}>
                                {'>'}
                            </button>
                        }
                        outsideChevron={true}
                        chevronWidth={chevronWidth}
                    >
                        {project.src.map(src => (
                            <img
                                key={project.key}
                                className={classes.image}
                                src={src}
                                alt={project.title}
                            />
                        ))}
                    </ItemsCarousel>
                </div>

                <div 
                    className={classes.details} 
                    onClick={handleClose}
                    style={{
                        width: windowY > windowX && '90%',
                        height: windowY > windowX && '50%',
                    }}
                >
                    <h1 className={classes.title}>
                        {project.title}
                    </h1>
                    <p className={classes.text}>
                        {project.description}
                    </p>
                    <Button
                        className={classes.button}
                        variant='outlined'
                        onClick={() => window.open(project.url, '_blank')}
                    >
                        APP
                    </Button>
                </div>
            
            </div>
        </Fade>
    );
}
