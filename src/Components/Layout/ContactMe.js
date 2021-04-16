import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MinimizeIcon from '@material-ui/icons/Minimize';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        minHeight: '30vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/milkyway.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: '#fff',
        marginTop: '4rem',
    },
    contactTitle: {
        fontSize: '1rem',
        marginBottom: '6rem',
        marginLeft: '2rem',
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
    email: {
        color: '#00ffea',
        textDecoration: 'none',
        fontSize: '2.5rem',
        fontWeight: 'bolder',
        marginTop: '6rem',
        marginRight: '2rem',
        transition: 'all .5s ease-in-out',
        '&:hover': {
            textShadow: '0 0 3px #fff',
        },
    },
}));

function ContactMe() {
    const classes = useStyles();
    
    return (
        <div className={classes.root} id='contactMe'>
            <Typography
            className={classes.contactTitle}
            >
                A creative <br /> 
                Problem solver <br /> 
                Affinity for the 
                <span className={classes.cosmic}>_cosmic</span>
            </Typography>
            <Tooltip title="Let's connect" arrow>
                <a target='_blank'
                    rel='noopener noreferrer'
                    href='mailto:brysonpalmer@gmail.com'
                    className={classes.email}>
                        <MinimizeIcon className={classes.bar} >_</MinimizeIcon>
                        contact
                </a>
            </Tooltip>
        </div>
    )
}

export default ContactMe;
