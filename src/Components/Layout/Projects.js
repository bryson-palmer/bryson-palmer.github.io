import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import Work from '../../static/Work';
import useWindowPosition from '../../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        }
    },
}));

export default function Projects() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <div className={classes.root} id='go-to-work'>
            <ImageCard project={Work[0]} checked={checked} />
            <ImageCard project={Work[1]} checked={checked} />
            <ImageCard project={Work[2]} checked={checked} />
            <ImageCard project={Work[3]} checked={checked} />
            <ImageCard project={Work[4]} checked={checked} />
            <ImageCard project={Work[5]} checked={checked} />
        </div>
    );
}

