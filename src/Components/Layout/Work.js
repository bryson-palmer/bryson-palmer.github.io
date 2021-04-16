import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import WorkData from '../../static/WorkData';
import { Collapse } from '@material-ui/core';
import useWindowPosition from '../../hook/useWindowPosition';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MinimizeIcon from '@material-ui/icons/Minimize';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minWidth: 300,
    width: '100%',
  },
  workHeader: {
    width: '100vw',
    padding: theme.spacing(4),
    textAlign: 'center',
    color: '#fff',
    fontSize: '3rem',
    lineHeight: '2rem'
  },
  bar: {
    color: '#00ffea',
    fontSize: '3rem',
    marginBottom: '-0.33rem',
    marginRight: '-1rem'
  },
  textHeader: {
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: 'lighter',
    lineHeight: '1rem'
  },
  textSpecial: {
    fontWeight: 'bold'
  },
  stack: {
    color: '#00ffea',
    marginBottom: '-0.3rem'
  },
  interactive: {
    color: '#00ffea',
    fontWeight: 'normal',
    transition: 'all .5s ease-in-out',
    '&:hover': {
      fontSize: '1.15rem',
      textShadow: '0 0 3px #fff',
    },
  },
  dynamic: {
    color: '#00ffea',
    fontWeight: 'normal',
  },
  clock: {
    background: '#fff',
    borderRadius: '50%',
    marginBottom: '2rem',
  },
  image: {
    position: 'relative',
    margin: theme.spacing(1),
    minHeight: 300,
    width: 300,
    [theme.breakpoints.down('xs')]: {
      width: '90% !important',
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      border: '5px solid #00ffea',
      borderRadius: '55px',
      boxShadow: '0 0 5px #fff',
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        opacity: 0.15,
      },
    },
  },
  focusVisible: {},
  imageButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#004675',
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    borderRadius: '50px',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#00ffea',
    backgroundBlendMode: 'multiply',
    opacity: 0.9,
    transition: theme.transitions.create('opacity'),
    borderRadius: '50px',
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
    backgroundColor: '#004675',
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },

}));

export default function Work() {
  const classes = useStyles();
  const checked = useWindowPosition('header');

  const[ showTime, setShowTime ] = useState(false);
  const [ value, setValue ] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, []);
  
  return (
    <div className={classes.root} id='go-to-work'>

      <Typography className={classes.workHeader}>
        <MinimizeIcon className={classes.bar} />
        WORK <br />
        <span className={classes.textHeader}>As a 
          <span className={classes.textSpecial}> MERN {' '}
          <MenuRoundedIcon className={classes.stack} />
          {' '} Full Stack developer</span> <br />
          I'm able to build 
          <span className={classes.interactive}> interactive </span> 
          and 
          <span 
            className={classes.dynamic}
            onMouseEnter={() => setShowTime(true)}
            onMouseLeave={() => setShowTime(false)}> 
            {' '} dynamic </span> 
          web sites and web applications. <br />
          I'm at home in the creative process whether it's engineering or styling software.
          I might be
          <span > fresh </span>
          out of boot camp but I'm full of inspiration and creative drive. Let's build the future.
        </span>
      </Typography>
      {showTime && (
        <div>
          <Clock 
            value={value} 
            className={classes.clock} 
            size={100} 
          />
        </div>
      )}

      <Collapse in={checked} { ... (checked ? { timeout: 1000 } : {})}>
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
      </Collapse>
    </div>
  );
}