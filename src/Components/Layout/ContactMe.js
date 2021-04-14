import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        minHeight: '200px',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/milkyway.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: '#fff',
    },
    email: {
        color: '#6bf9b9',
        textDecoration: 'none',
        fontSize: '1.5rem',
        grow: 'transition: all .2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
            smooth: 'true',
        },
        marginRight: '2rem',
    },
}));

function ContactMe() {
    const classes = useStyles();
    
    return (
        <div className={classes.root} id='contactMe'>
            <a target="_blank"
                rel="noopener noreferrer"
                href="mailto:brysonpalmer@gmail.com"
                className={classes.email}>
                    _contact
            </a>
        </div>
    )
}

export default ContactMe;
