import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from '../ImageCard';
import WorkData from '../../static/WorkData';
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
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Projects() {
    const classes = useStyles();
    const checked = useWindowPosition('header');

    
    return (
        <div className={classes.root} >
            <ImageCard project={WorkData[0]} checked={checked} />
            <ImageCard project={WorkData[1]} checked={checked} />
            <ImageCard project={WorkData[2]} checked={checked} />
            <ImageCard project={WorkData[3]} checked={checked} />
            <ImageCard project={WorkData[4]} checked={checked} />
            <ImageCard project={WorkData[5]} checked={checked} />
            <ImageCard project={WorkData[6]} checked={checked} />
        </div>
    );
}

