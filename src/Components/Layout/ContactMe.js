import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
        marginTop: '10rem',
    },
    contactTitle: {
        fontSize: '1rem',
        marginBottom: '6rem',
        marginLeft: '2rem',
    },
    cosmic: {
        color: '#6bf9b9',
    },
    email: {
        color: '#6bf9b9',
        textDecoration: 'none',
        fontSize: '2.5rem',
        fontWeight: 'bolder',
        transition: 'all .5s ease-in-out',
        marginTop: '6rem',
        marginRight: '2rem',
        '&:hover': {
            transform: 'scale(1.02)',
            textShadow: '0 0 5px #fff',
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
            <a target='_blank'
                rel='noopener noreferrer'
                href='mailto:brysonpalmer@gmail.com'
                className={classes.email}>
                    _contact
            </a>
        </div>
    )
}

export default ContactMe;
