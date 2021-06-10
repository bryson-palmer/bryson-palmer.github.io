import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        width: '90vw',
        top: '10%',
        bottom: '0%',
        left: '0%',
        right: '0%',
        margin: '0 auto',
        color: '#fff',
        fontSize: '150%',
        fontWeight: 'bold',
        textAlign: 'justify',
        overflow: 'scroll',
        scrollBehavior: 'smooth',
        transformOrigin: '50% 100%',
    },
    content: {
        fontFamily: 'Open Sans, sans-serif',
        position: 'absolute',
        top: '50%',
        lineHeight: '2rem',
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
        // [theme.breakpoints.down('sm')]: {
        //     fontSize: '0.7rem',
        // },
        // [theme.breakpoints.down('xs')]: {
        //     fontSize: '0.6rem',
        // },
    },
    mern: {
        color: '#fff',
        fontWeight: 'bolder',
        fontSize: '100%',
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
    },
    list: {
        textAlign: 'left',
    },
    skills: {
        color: '#00ffea',
    },
}));

export default function AboutMe() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                
                <p>
                    <span className={classes.bar}> | </span>
                    <span className={classes.mern}> MERN </span>  
                    <span className={classes.bar}> | </span>
                    Developer looking to build interactive and responsive web experiences for the future. I received a certificate in Full Stack Web Development from the University of Washington. I also have an AAS in Business Administration with an emphasis in Management Information Systems. Passions include creating music, mixed martial arts, space science, and civil rights. Leveraging my passions and experiences I will bring that level of attention-to-detail, passion, collaboration, and creativity to see any project succeed. Major strengths include front end, flexibility, innovation, and conflict resolution. I immerse myself into whatever I do.
                </p>
                
                <h2>Technical Skills</h2>
                <ul className={classes.list}>
                    <li><span className={classes.skills}>Front End:</span> HTML5, CSS3, Javascript </li>
                    <li><span className={classes.skills}>Frameworks:</span> React, jQuery, Handlebars </li>
                    <li><span className={classes.skills}>Styles:</span> Bootstrap, React-Bootstrap, Material UI </li>
                    <li><span className={classes.skills}>Back End:</span> Node, Express </li>
                    <li><span className={classes.skills}>Database:</span> MySQL, Sequelize, MongoDB, Mongoose </li>
                    <li><span className={classes.skills}>Other Technologies:</span> Axios, JSON, AJAX </li>
                    <li><span className={classes.skills}>User Auth Tools:</span> passport, passport-jwt, passport-local, bcryptjs </li>
                </ul>

                <div>
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
                </div>   
            </div>
        </div>           
    );
}
