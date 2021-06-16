import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, ButtonBase, Backdrop, Snackbar, Collapse }
  from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MinimizeIcon from '@material-ui/icons/Minimize';
import InfoIcon from '@material-ui/icons/Info';
import ItemsCarousel from 'react-items-carousel';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import WorkData from '../../static/WorkData';
import ProjectCarousel from '../ProjectCarousel';
import useWindowWidth from '../../hook/useWindowWidth';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minWidth: 280,
    width: '100%',
    [theme.breakpoints.up('768')]: {
      marginBottom: '4rem'
    },
  },
  workHeader: {
    maxWidth: '60vw',
    padding: theme.spacing(4, 2, 4, 2),
    textAlign: 'center',
    color: '#fff',
    fontSize: '5rem',
    lineHeight: '1.3rem',
    [theme.breakpoints.down('md')]: {
      maxWidth: '85vw',
      fontSize: '4rem'
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '95vw',
      fontSize: '4rem'
    },
    [theme.breakpoints.down('321')]: {
      fontSize: '3rem'
    },
  },
  bar: {
    color: '#00ffea',
    fontSize: '5rem',
    marginBottom: '-0.55rem',
    marginRight: '-1.5rem',
    [theme.breakpoints.down('768')]: {
      fontSize: '3rem',
      marginBottom: '-0.33rem',
      marginRight: '-1rem',
    },
    [theme.breakpoints.down('321')]: {
      fontSize: '2.5rem'
    },
  },
  text: {
    color: '#fff',
    fontSize: '1.4rem',
    fontWeight: 'lighter',
    lineHeight: '1.6rem',
    [theme.breakpoints.down('768')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
      lineHeight: '1.2rem',
    },
    [theme.breakpoints.down('321')]: {
      fontSize: '0.9rem',
      lineHeight: '1.1rem',
    },
  },
  textSpecial: {
    fontWeight: 'bold',
    [theme.breakpoints.down('768')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.down('321')]: {
      fontSize: '0.9rem',
    },
  },
  stack: {
    color: '#00ffea',
    fontSize: '1.7rem',
    marginBottom: '-0.3rem',
    [theme.breakpoints.down('768')]: {
      fontSize: '1.6rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.down('321')]: {
      fontSize: '1.2rem',
    },
  },
  lilStack: {
    fontSize: '1.2rem',
    color: '#00ffea',
    marginBottom: '-0.3rem'
  },
  infoIcon: {
    fontSize: '1.5rem',
    marginLeft: '0.5rem',
    color: '#00ffea',
    transition: 'all .5s ease-in-out',
    '&:hover': {
      filter: 'drop-shadow(0px 0px 1px #fff)',
    },
    [theme.breakpoints.down('768')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1rem',
    },
  },
  mern: {
    lineHeight: '1rem',
  },
  [theme.breakpoints.down('xs')]: {
    lineHeight: '0',
  },
  dynamic: {
    color: '#00ffea',
    fontWeight: 'normal',
    fontSize: '1.5rem',
    margin: '0 0.4rem 0.25rem 0.4rem',
    transition: 'all .5s ease-in-out',
    '&:hover': {
      textDecoration: 'none',
      textShadow: '0 0 3px #fff',
    },
    [theme.breakpoints.down('768')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.down('321')]: {
      fontSize: '1rem',
      margin: '0 0.4rem 0.10rem 0.4rem',
    },
  },
  interactive: {
    color: '#00ffea',
    fontWeight: 'normal',
    fontSize: '1.5rem',
    margin: '0 0.4rem 0.25rem 0.4rem',
    transition: 'all .5s ease-in-out',
    '&:hover': {
      textDecoration: 'none',
      textShadow: '0 0 3px #fff',
      marginBottom: '0.2rem',
    },
    [theme.breakpoints.down('768')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.down('321')]: {
      fontSize: '1rem',
      margin: '0 0.4rem 0.10rem 0.4rem',
    },
  },
  future: {
    color: '#00ffea',
    fontSize: '1.5rem',
    fontWeight: 'normal',
    [theme.breakpoints.down('768')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    minWidth: '280px !important',
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: 'normal',
    display: 'flex',
    flexDirection: 'column',
    background: 'rgba(2, 2, 2, 0.97)',
  },
  clock: {
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '50%',
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0rem',
    },
  },
  snackbar: {
    maxWidth: '200px',
  },
  color: {
    color: '#00ffea',
    fontWeight: 'bold',
  },
  itemsCarousel: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.down('361')]: {
    },
  },
  detailsLabel: {
    color: '#fff',
    fontSize: '2rem',
    margin: '5rem 0 -1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.down('415')]: {
      fontSize: '1.3rem'
    },
    [theme.breakpoints.down('415')]: {
      fontSize: '1.3rem'
    },
    [theme.breakpoints.down('281')]: {
      fontSize: '1.1rem'
    },
  },
  image: {
    position: 'relative',
    margin: theme.spacing(1.5),
    boxShadow: '-8px 8px 11px #0D0C0C',
    height: 350,
    width: 475,
    borderRadius: '8px',
    [theme.breakpoints.down('sm')]: {
      height: 260,
      width: 450,
      margin: `${theme.spacing(4)}px ${theme.spacing(0)}px`,
      boxShadow: '-5px 5px 15px #0D0C0C',
    },
    [theme.breakpoints.down('xs')]: {
      height: 240,
      width: 350,
    },
    [theme.breakpoints.down('445')]: {
      height: 240,
      width: 280,
    },
    [theme.breakpoints.down('376')]: {
      height: 240,
      width: 240,
    },
    [theme.breakpoints.down('321')]: {
      height: 200,
      width: 220,
      boxShadow: '-5px 5px 8px #0D0C0C',
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageSrc': {
        border: '3px solid #00ffea',
        borderRadius: '8px',
        boxShadow: '0 0 5px #fff',
      },
      '& $imageBackdrop': {
        opacity: 0,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        opacity: 0,
      },
    },
  },
  focusVisible: {},
  imageButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 0%',
    borderRadius: '8px',
  },
  backgroundInfo: {
    position: 'absolute',
    left: 3,
    right: 3,
    top: '50%',
    bottom: 2,
    color: '#fff',
    fontWeight: 'normal',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    background: 'rgba(2, 2, 2, 0.8)',
    borderRadius: '0 0 6px 6px',
    padding: '1rem',
  },
  role: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
    [theme.breakpoints.down('569')]: {
      fontSize: '1.2rem',
      marginBottom: '0.4rem',
    },
    [theme.breakpoints.down('415')]: {
      fontSize: '1rem',
      marginBottom: '0.4rem',
    },
    [theme.breakpoints.down('376')]: {
      fontSize: '0.8rem',
    },
    [theme.breakpoints.down('321')]: {
      fontSize: '0.7rem',
      marginBottom: '0.3rem',
    },
  },
  responsibilities: {
    fontSize: '1rem',
    textAlign: 'justify',
    marginBottom: '0.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
    [theme.breakpoints.down('569')]: {
      fontSize: '0.7rem',
      marginBottom: '0.4rem',
    },
    [theme.breakpoints.down('376')]: {
      fontSize: '0.6rem',
      marginBottom: '0.5rem',
    },
    [theme.breakpoints.down('321')]: {
      marginBottom: '0.3rem',
    },
  },
  details: {
    fontSize: '0.8rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.6rem',
    },
    [theme.breakpoints.down('321')]: {
      fontSize: '0.5rem',
    },
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#B2FFF8',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/stars.jpg'})`,
    backgroundBlendMode: 'multiply',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: theme.transitions.create('opacity'),
    borderRadius: '8px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.down('321')]: {
      width: '100%',
    },
  },
  imageTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bolder',
    fontFamily: 'Righteous, cursive',
    textAlign: 'center',
    lineHeight: '2.4rem',
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    [theme.breakpoints.down('376')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.down('321')]: {
      fontSize: '1.7rem',
    },
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: '#00ffea',
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  chevronLeft: {
    height: 350,
    width: 30,
    color: '#00ffea',
    fontSize: '4rem',
    backgroundColor: 'rgba(28, 28, 28, 0.5)',
    border: 'none',
    borderRadius: '0 8px 8px 0',
    padding: 0,
    '&:hover': {
      textDecoration: 'none',
      textShadow: '0 0 3px #fff',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
      height: 260,
    },
    [theme.breakpoints.down('xs')]: {
      height: 240,
    },
    [theme.breakpoints.down('445')]: {
      height: 240,
    },
    [theme.breakpoints.down('376')]: {
      height: 240,
    },
    [theme.breakpoints.down('321')]: {
      height: 200,
    },
    [theme.breakpoints.down('281')]: {
      fontSize: '1.5rem',
    },
  },
  chevronRight: {
    height: 350,
    width: 30,
    color: '#00ffea',
    fontSize: '4rem',
    backgroundColor: 'rgba(28, 28, 28, 0.5)',
    border: 'none',
    borderRadius: '8px 0 0 8px',
    padding: 0,
    '&:hover': {
      textDecoration: 'none',
      textShadow: '0 0 3px #fff',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
      height: 260,
    },
    [theme.breakpoints.down('xs')]: {
      height: 240,
    },
    [theme.breakpoints.down('445')]: {
      height: 240,
    },
    [theme.breakpoints.down('376')]: {
      height: 240,
    },
    [theme.breakpoints.down('321')]: {
      height: 200,
    },
    [theme.breakpoints.down('281')]: {
      fontSize: '1.5rem',
    },
  },
}));

export default function Work() {
  const classes = useStyles();
  const windowX = useWindowWidth().width;
  const windowY = useWindowWidth().height;

  // State for hiding and showing the clock
  const [showTime, setShowTime] = useState(false);
  // State for clock values
  const [value, setValue] = useState(new Date());

  // State for MERN snackbar
  const [showMern, setShowMern] = useState(false);

  // State for active item in carousel
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  // State and handler functions for opening/closing project backdrop/carousel
  const [handleOpen, setHandleOpen] = useState(false);

  const handleClose = () => {
    setHandleOpen(false);
  };
  const handleToggle = () => {
    setHandleOpen(!handleOpen)
  };

  // Button state for projects
  const [project, setProject] = useState('');

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
      {/* Work header paragraph */}
      <header>
        <Typography className={classes.workHeader}>
          <MinimizeIcon className={classes.bar} />
          WORK <br />
          <span className={classes.text}>As a
            <span className={classes.textSpecial}
            > MERN {' '}
              <MenuRoundedIcon className={classes.stack} />
              {' '} Full-Stack developer
              <ButtonBase
                onClick={() => setShowMern(true)}>
                <InfoIcon className={classes.infoIcon} />
              </ButtonBase>
            </span> <br />
            I'm able to build
            <ButtonBase className={classes.dynamic}>dynamic </ButtonBase>
            and
            <ButtonBase
              className={classes.interactive}
              onClick={() => setShowTime(true)} >
              {' '} interactive </ButtonBase>
            web sites and web applications.
            I'm at home in the creative process whether it's engineering or styling software.
            I'm full of inspiration and creative drive. Let's build the<span className={classes.future}> future</span>.
          </span>

        </Typography>

        <Typography>
          <span className={classes.detailsLabel}>
            Click on a project for details
          </span>
        </Typography>
      </header>

      {/* Clock modal */}
      {showTime && (
        <div>
          <Backdrop
            className={classes.backdrop}
            open={showTime}
            onClick={() => setShowTime(false)}
            style={{ flexDirection: windowX > windowY ? 'row' : 'column' }}
          >
            <p
              className={classes.clockText}
              style={{ marginRight: windowX > windowY && '1rem' }}
            >
              Lik<MenuRoundedIcon className={classes.lilStack} />
              grabbing this clock here
            </p>
            <Clock
              value={value}
              className={classes.clock}
              size={250}
            />
          </Backdrop>
        </div>
      )}

      {/* MERN notification */}
      {showMern && (
        <div>
          <Snackbar
            className={classes.snackbar}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={showMern}
            onClick={() => setShowMern(false)}
            message={
              <div className={classes.mern}>
                <p className={classes.color} style={{ fontSize: '2rem' }}>M.E.R.N</p>
                <p className={classes.text}><span className={classes.color}>M</span >ongoDB/<span className={classes.color}>M</span>ySQL Database</p>
                <p className={classes.text}><span className={classes.color}>E</span>xpress Server</p>
                <p className={classes.text}><span className={classes.color}>R</span>eact Frontend Framework</p>
                <p className={classes.text}><span className={classes.color}>N</span>ode JavaScript Environment</p>
              </div>
            }
          />
        </div>
      )}

      {/* Work projects in a ternary conditional */}
      {/* When the screen size is greater than 768px use a grid */}
      {windowX > 768 ?
        <div>
          {WorkData.map((work) => (
            <ButtonBase
              focusRipple={true}
              key={work.key}
              className={classes.image}
              onClick={() => { setProject(work); handleToggle(); }}
              focusVisibleClassName={classes.focusVisible}
            >
              {/* Project image */}
              <span
                className={classes.imageSrc}
                alt={work.title}
                style={{ backgroundImage: `url(${work.src[0]})` }}
              />

              {/* Project information half modal */}
              <span className={classes.backgroundInfo} >
                <span className={classes.role}>{work.role}</span>
                <span className={classes.responsibilities}>{work.responsibilities}</span>
                <span className={classes.details}>{work.details} </span>
              </span>

              {/* Stars image */}
              <span className={classes.imageBackdrop} />

              {/* Image container */}
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

          {/* Project modal */}
          <Backdrop
            className={classes.backdrop}
            open={handleOpen}
          >
            {/* Project carousel */}
            {handleOpen && (
              <ProjectCarousel
                handleClose={handleClose}
                project={project}
              />
            )}
          </Backdrop>

        </div>
        :

        // For screen sizes 768px and smaller use a carousel
        <div className={classes.itemsCarousel} style={{ padding: 0 }}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={1}
            gutter={(windowX > 767 && 63) || (windowX > 539 && 40) || (windowX > 410 && 30.5) || (windowX > 389 && 27) || (windowX > 361 && 31.5) || (windowX > 321 && 28) || (windowX > 300 && 25) || (windowX < 300 && 15)}
            infiniteLoop={true}
            outsideChevron={false}
            chevronWidth={25}
            showSlither={true}
            firstAndLastGutter={true}
            leftChevron={<button className={classes.chevronLeft}>{'<'}</button>}
            rightChevron={<button className={classes.chevronRight}>{'>'}</button>}
          >
            {WorkData.map((work) => (
              <ButtonBase
                focusRipple
                key={work.key}
                className={classes.image}
                onClick={() => { setProject(work); handleToggle(); }}
                focusVisibleClassName={classes.focusVisible}
              >
                {/* Project image */}
                <span
                  className={classes.imageSrc}
                  alt={work.title}
                  style={{ backgroundImage: `url(${work.src[0]})` }}
                />

                {/* Project information half modal */}
                <span className={classes.backgroundInfo} >
                  <span className={classes.role}>{work.role}</span>
                  <span className={classes.responsibilities}>{work.responsibilities}</span>
                  <span className={classes.details}>{work.details} </span>
                </span>

                {/* Stars image */}
                <span className={classes.imageBackdrop} />

                {/* Image container */}
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
          </ItemsCarousel>

          {/* Project modal */}
          {handleOpen && (
            <Backdrop
              className={classes.backdrop}
              open={handleOpen}
            >
              <ProjectCarousel
                handleClose={handleClose}
                project={project}
              />
            </Backdrop>
          )}
        </div>
      }
    </div>
  );
}