import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import WorkData from '../../static/WorkData';
// import useWindowPosition from '../../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 300,
    width: '100%',
  },
  workHeader: {
    width: '100vw',
    padding: theme.spacing(4),
    textAlign: 'center',
    color: '#fff',
    fontSize: '3rem',
  },
  bar: {
    color: '#6bf9b9',
  },
  image: {
    position: 'relative',
    margin: theme.spacing(1),
    minHeight: 300,
    width: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0.15,
      },
      '& $imageTitle': {
        opacity: 0.15,
      },
      '& $imageButton': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
    marginTop: '10rem',
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#00ffea',
    backgroundBlendMode: 'multiply',
    opacity: 0.8,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bolder',
    textAlign: 'center',
    lineHeight: '2.4rem',
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },

}));

export default function Work() {
  const classes = useStyles();
  // const checked = useWindowPosition('header');
  
  return (
    <div className={classes.root} id='go-to-work'>
      <Typography className={classes.workHeader}>
        <span className={classes.bar}>_</span>Work
      </Typography>
      {WorkData.map((work) => (
        <ButtonBase
          focusRipple
          key={work.title}
          className={classes.image}
          onClick={() => window.open('work.url', '_blank')}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: work.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${work.src})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {work.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}