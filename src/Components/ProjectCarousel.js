import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Fade } from '@material-ui/core';
import ItemsCarousel from 'react-items-carousel';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '0rem 40px',
    },
    color: {
        color: '#00ffea',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        left: '96%',
    },
    closeIcon: {
        fontSize: '1.5rem',
        color: '#00ffea',
    },
    itemsCarousel: {
        width: '55%',
    },
    chevron: {
        zIndex: theme.zIndex.drawer + 2,
        color: '#00ffea',
        fontSize: '4rem',
        backgroundColor: 'transparent !important',
        border: 'none !important',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem !important',
        },
    },
    image: {
        height: '100%',
        width: '85%',
        borderRadius: '10px',
    },
    details: {
        height: '54%',
        width: '35%',
        color: '#FFF',
        flexDirection: 'column',
        padding: '0 2rem'
    },
    title: {
        margin: '0',
        fontSize: '3rem',
        color: '#00ffea',
    },
    text: {
        lineHeight: '2rem',
    },
    button: {
        width: '100px',
        color: '#00ffea',
        border: 'solid 1px #00ffea',
        margin: '2rem auto',
    },
}));

export default function ProjectCarousel({ handleClose, project }) {
    const classes = useStyles();

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
            <div className={classes.root}>
            
                <Button className={classes.closeButton} onClick={handleClose}>
                    <CloseRoundedIcon className={classes.closeIcon} />
                </Button>

                <div className={classes.itemsCarousel}>

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

                <div className={classes.details} onClick={handleClose}>
                    <h1 className={classes.title}>{project.title}</h1>
                    <p className={classes.text}>{project.description}</p>
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
