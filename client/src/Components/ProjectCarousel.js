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
        justifyContent: 'center',
        alignItems: 'center',
    },
    color: {
        color: '#00ffea',
    },
    closeButton: {
        position: 'fixed',
        top: '20px',
        left: '96.5%',
        [theme.breakpoints.down('lg')]: {
            top: '20px',
            left: '94%',
        },
        [theme.breakpoints.down('md')]: {
            top: '18px',
            left: '93%',
        },
        [theme.breakpoints.down('1024')]: {
            top: '15px',
            left: '92%',
        },
        [theme.breakpoints.down('xs')]: {
            top: '10px',
            left: '89% !important',
        },
        [theme.breakpoints.down('415')]: {
            top: '10px',
            left: '86% !important',
        },
        [theme.breakpoints.down('376')]: {
            top: '8px',
            left: '85% !important',
        },
        [theme.breakpoints.down('321')]: {
            top: '6px',
            left: '81% !important',
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
    demoLogIn: {
        lineHeight: '0.7rem',
        fontSize: '1.8rem',
        [theme.breakpoints.down('lg')]: {
            fontSize: '1.2rem',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '0.9rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.7rem',
        },
        [theme.breakpoints.down('668')]: {
            lineHeight: '0.5rem',
            fontSize: '0.6rem',
        },
        [theme.breakpoints.down('xs')]: {
            lineHeight: '0.4rem',
            fontSize: '0.6rem',
        },
    },
    itemsCarousel: {
        width: '45%',
        padding: '0 40px',
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
        width: '100%',
        borderRadius: '10px',
    },
    details: {
        maxHeight: '100vh',
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '0 40px',
    },
    title: {
        margin: 0,
        fontSize: '3.5rem',
        color: '#00ffea',
        [theme.breakpoints.down('md')]: {
            fontSize: '3rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.down('654')]: {
            fontSize: '1.5rem',
        },
    },
    text: {
        color: '#fff',
        fontSize: '1.8rem',
        lineHeight: '3rem',
        textAlign: 'justify',
        [theme.breakpoints.down('lg')]: {
            lineHeight: '2.3rem',
            fontSize: '1.2rem',
        },
        [theme.breakpoints.down('md')]: {
            lineHeight: '1.7rem',
            fontSize: '0.9rem',
        },
        [theme.breakpoints.down('sm')]: {
            lineHeight: '1.2rem',
            fontSize: '0.7rem',
        },
        [theme.breakpoints.down('668')]: {
            lineHeight: '0.9rem',
            fontSize: '0.6rem',
        },
        [theme.breakpoints.down('xs')]: {
            lineHeight: '0.8rem',
            fontSize: '0.6rem',
        },
    },
    bar: {
        color: '#00ffea',
        fontSize: '100%',
    },
    techIcons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1rem',
    },
    techIcon: {
        width: '13%',
        margin: '0 0.3rem',
    },
    buttonBox: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    button: {
        width: '180px',
        color: '#00ffea',
        fontSize: '1.4rem',
        border: 'solid 1px #00ffea',
        borderRadius: '8px',
        margin: '0.3rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '0.9rem',
            width: '130px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.7rem',
            width: '100px',
        },
        [theme.breakpoints.down('668')]: {
            fontSize: '0.5rem',
            width: '70px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '50px',
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

        // Fade in project modal
        <Fade in={activeHeader} timeout={1500}  >
            <div
                className={classes.root}
                style={{
                    flexDirection: windowY > windowX && 'column-reverse',
                }}
            >

                {/* Close button for project modal */}
                <Button
                    className={classes.closeButton}
                    onClick={handleClose}
                    style={{ left: windowX <= 415 && '70%' }}
                >
                    <CloseRoundedIcon className={classes.closeIcon} />
                </Button>

                {/* Carousel container */}
                <div
                    className={classes.itemsCarousel}
                    style={{
                        width: windowY > windowX && '75%',
                        marginBottom: windowY > windowX && '0rem',
                        padding: windowY > windowX && '2rem',
                    }}
                >
                    {project.email &&
                        <div>
                            Demo Log In
                            <div className={classes.demoLogIn}>
                                <p>
                                    email: {project.email}
                                </p>
                            </div>
                            <div>
                                <p className={classes.demoLogIn}>
                                    password: {project.password}
                                </p>
                            </div>
                        </div>
                    }

                    {/* Carousel of project images */}
                    <ItemsCarousel
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={1}
                        gutter={10}
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
                        {/* Mapping over images of project */}
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

                {/* Details container */}
                <div
                    className={classes.details}
                    onClick={handleClose}
                    style={{
                        width: windowY > windowX && '90%',
                        marginTop: windowY > windowX && '3rem',
                    }}
                >
                    {/* Details */}

                    {/* Title */}
                    <h1 className={classes.title}>
                        {project.title}
                    </h1>
                    {/* Description */}
                    <p className={classes.text}>
                        {project.description} <br /> <br />
                        <span className={classes.bar}> | </span>
                        <span> Concepts </span>
                        <span className={classes.bar}> | </span>

                        {/* Concepts */}
                        {project.concepts}
                    </p>
                    
                    {/* Tech */}
                    <div className={classes.techIcons}>
                        {project.tech.map(tech => (
                            <img
                                key={tech}
                                className={classes.techIcon}
                                src={tech}
                                alt={project.title}
                            />
                        ))}
                    </div>
                    {/* Buttons */}
                    <div className={classes.buttonBox}>
                        <Button
                            className={classes.button}
                            variant='outlined'
                            onClick={() => window.open(project.url, '_blank')}
                        >
                            APP
                        </Button>
                        <Button
                            className={classes.button}
                            variant='outlined'
                            onClick={() => window.open(project.git, '_blank')}
                        >
                            GITHUB
                        </Button>
                    </div>

                </div>

            </div>
        </Fade>
    );
}
