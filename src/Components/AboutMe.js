import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useWindowWidth from '../hook/useWindowWidth';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        width: '85%',
        top: '10%',
        bottom: '0%',
        left: '0%',
        right: '0%',
        margin: '1rem auto 2rem auto',
        color: '#fff',
        fontSize: '250%',
        fontWeight: 'bold',
        textAlign: 'justify',
        overflow: 'scroll',
        scrollBehavior: 'smooth',
        transformOrigin: '50% 100%',
        [theme.breakpoints.down('lg')]: {
            fontSize: '200%',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '150%',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '130%',
            textAlign: 'left',
        },
        [theme.breakpoints.down('321')]: {
            fontSize: '110%',
        }
    },
    content: {
        fontFamily: 'Open Sans, sans-serif',
        position: 'absolute',
        top: '25%',
    },
    bio: {},
    bioText: {
        Width: '70vw',
    },
    bioPortrait: {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/portrait.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '90%',
        backgroundPosition: 'center 20%',
        backgroundColor: 'rgba(28, 28, 28, 0.6)',
        height: '20rem',
        width: '20rem',
        float: 'right',
        marginRight: '2rem',
        marginBottom: '1rem',
        marginLeft: '5rem',
        border: '3px solid rgba(0, 255, 234, 0.8)',
        borderRadius: '50%',
        shapeOutside: 'circle()',
        [theme.breakpoints.down('lg')]: {
            height: '15rem',
            width: '15rem',
        },
        [theme.breakpoints.down('md')]: {
            height: '10rem',
            width: '10rem',
        },
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.down('xs')]: {
            height: '7rem',
            width: '7rem',
            marginLeft: '1rem',
        },
        [theme.breakpoints.down('376')]: {
            marginLeft: '3rem',
        }
    },
    bar: {
        color: '#00ffea',
        fontSize: '100%',
        // [theme.breakpoints.down('lg')]: {
        //     fontSize: '1.2rem',
        // },
        // [theme.breakpoints.down('md')]: {
        //     fontSize: '0.9rem',
        // },
        // [theme.breakpoints.down('xs')]: {
        //     fontSize: '0.7rem',
        // },
        // [theme.breakpoints.down('321')]: {
        //     fontSize: '0.6rem',
        // },
    },
    // mern: {
    //     color: '#fff',
    //     fontWeight: 'bolder',
    //     fontSize: '100%',
    // [theme.breakpoints.down('lg')]: {
    //     fontSize: '1.3rem',
    // },
    // [theme.breakpoints.down('md')]: {
    //     fontSize: '1rem',
    // },
    // [theme.breakpoints.down('sm')]: {
    //     fontSize: '0.8rem',
    // },
    // [theme.breakpoints.down('xs')]: {
    //     fontSize: '0.7rem',
    // },
    // },
    lists: {
        textAlign: 'left',
    },
    skills: {
        color: '#00ffea',
    },
}));

export default function AboutMe() {
    const classes = useStyles();
    const windowY = useWindowWidth().height;
    const windowX = useWindowWidth().width;

    return (
        <div className={classes.root}
            style={{ marginTop: windowX > windowY && '3rem' }}>
            <div className={classes.content}>
                <div className={classes.bio}>
                    <div className={classes.bioPortrait}></div>

                    <p className={classes.bioText}>
                        <span className={classes.bar}> | </span>
                        <span > MERN </span>
                        <span className={classes.bar}> | </span>
                        Developer looking to build interactive and responsive web experiences for the future.
                    </p>


                    <p className={classes.bioText}>
                        I received a certificate in Full Stack Web Development from the University of Washington. I also have an AAS in Business Administration with an emphasis in Management Information Systems.
                    </p>

                    <p className={classes.bioText}>
                        Passions include creating music, mixed martial arts, space science, and civil rights. Leveraging my passions and experiences I aim to bring the same attention-to-detail, dedication, collaboration, and creativity to see any project succeed. Major strengths include front end, flexibility, innovation, and conflict resolution. I immerse myself into whatever I do.
                    </p>
                </div>

                <div className={classes.lists}>
                    <h2>Technical Skills</h2>
                    <ul>
                        <li><span className={classes.skills}>Front End:</span> HTML5, CSS3, Javascript </li>
                        <li><span className={classes.skills}>Frameworks:</span> React, jQuery, Handlebars </li>
                        <li><span className={classes.skills}>Styles:</span> Bootstrap, React-Bootstrap, Material UI </li>
                        <li><span className={classes.skills}>Back End:</span> Node, Express </li>
                        <li><span className={classes.skills}>Database:</span> MySQL, Sequelize, MongoDB, Mongoose </li>
                        <li><span className={classes.skills}>Other Technologies:</span> Axios, JSON, AJAX </li>
                        <li><span className={classes.skills}>User Auth Tools:</span> passport, passport-jwt, passport-local, bcryptjs </li>
                    </ul>

                    <h2>Transferable Skills</h2>
                    <ul>
                        <li>Adaptable</li>
                        <li>Attention-to-detail</li>
                        <li>Balance Design &amp; Functionality</li>
                        <li>Collaborative</li>
                        <li>Customer Service Savvy</li>
                        <li>Passionate</li>
                        <li>Problem Solver</li>
                        <li>Self-Motivated &amp; Teachable</li>
                        <li>Strong Communicator</li>
                    </ul>

                    <h2>Life Experience Conclusions</h2>
                    <ul>
                        <li>There is a creative and logical perspective to everything.</li>
                        <li>Every attribute in life exists on a sprectrum.</li>
                        <li>Life is a journey so enjoy the process.</li>
                        <li>Your greatest opponent will always be yourself.</li>
                        <li>You either win or you learn.</li>
                        <li>One step at a time.</li>
                        <li>Aim to be better than you were yesterday.</li>
                        <li>We stand on the shoulders of those that came before us.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
