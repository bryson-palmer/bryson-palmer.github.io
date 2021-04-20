import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, ButtonBase, Collapse, Backdrop, Snackbar } 
  from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MinimizeIcon from '@material-ui/icons/Minimize';
import ItemsCarousel from 'react-items-carousel';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import WorkData from '../../static/WorkData';
import useWindowPosition from '../../hook/useWindowPosition';
import useWindowWidth from '../../hook/useWindowWidth';

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
  text: {
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
  lilStack: {
    fontSize: '1.2rem',
    color: '#00ffea',
    marginBottom: '-0.3rem'
  },
  interactive: {
    color: '#00ffea',
    fontWeight: 'normal',
    fontSize: '1.1rem',
    margin: '0 0.3rem 0.15rem 0.3rem',
    transition: 'all .5s ease-in-out',
    '&:hover': {
      fontSize: '1.25rem',
      textShadow: '0 0 3px #fff',
    },
  },
  dynamic: {
    color: '#00ffea',
    fontWeight: 'normal',
    fontSize: '1.1rem',
    margin: '0 0.3rem 0.15rem 0.3rem',
    transition: 'all .5s ease-in-out',
  },
  future: {
    color: '#00ffea',
    fontSize: '1.1rem',
    fontWeight: 'normal',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: 'normal',
    display: 'flex',
    flexDirection: 'column',
    background: 'rgba(2, 2, 2, 0.9)',
  },
  clockText: {
    
  },
  clock: {
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '50%',
    marginTop: '1rem',
  },
  snackbar: {
    maxWidth: '200px',
  },
  color: {
    color: '#00ffea',
    fontWeight: 'bold',
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
      border: '3px solid #00ffea',
      borderRadius: '55px',
      boxShadow: '0 0 5px #fff',
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
    backgroundPosition: 'center 40%',
    borderRadius: '50px',
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
    backgroundColor: '#00ffea',
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  entered: {
    overflow: 'hidden',
  },
  // itemsCarousel: {
  //   maxWidth: 'inherit !important',
  // },
  rightChevronWrapper: {
    width: '40px !important',
    height: '40px !important',
    borderRadius: '5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingTop: '0.4rem',
    display: 'flex',
    justifyContent: 'center',
    alignConten: 'center',
    justifyDirection: 'space-between',
    '&:hover, &$chevronWrapper': {

    }
  },
  leftChevronWrapper: {
    width: '40px !important',
    height: '40px !important',
    borderRadius: '5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingTop: '0.4rem',
    display: 'flex',
    justifyContent: 'center',
    alignConten: 'center',
    justifyDirection: 'space-between',
    '&:hover, &$chevronWrapper': {

    }
  },
  chevron: {
    color: '#fff',
    fontSize: '1.5rem',
    backgroundColor: 'transparent !important',
    // margin: '1rem',
    border: 'none !important',
    width: '20px !important',
    height: '20px !important'
  },
  // items: {
  //   height: '300px',
  //   width: '300px',
  //   margin: '0 0.5rem',
  //   border: 'solid 0.5px black',
  //   background: 'lightblue',
  // },

}));



export default function Work() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  const windowX = useWindowWidth();

  // State for hiding and showing the clock
  const [showTime, setShowTime] = useState(false);
  // State for clock values
  const [value, setValue] = useState(new Date());
  // State for snackbar
  const [showMern, setShowMern] = useState(false);
  // State for active item in carousel
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  // width for carousel buttons
  const chevronWidth = 40;
  // // State for button event
  // const [buttonState, setButtonState] = useState('');
  // const handleStateChange = (e) => {
  //   const { target } = e;
  //   const { value } = target;

  //   setButtonState(
  //     value
  //   )

  // }

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, []);

  // console.log('buttonState', buttonState)
  return (
    <div className={classes.root} id='go-to-work'>

      <Typography className={classes.workHeader}>
        <MinimizeIcon className={classes.bar} />
        WORK <br />
        <span className={classes.text}>As a
          <span
            onMouseEnter={() => setShowMern(true)}
            className={classes.textSpecial}
          > MERN {' '}
            <MenuRoundedIcon className={classes.stack} />
            {' '} Full Stack developer
          </span> <br />
          I'm able to build
          <ButtonBase className={classes.interactive}>interactive </ButtonBase>
          and
          <ButtonBase
            className={classes.dynamic}
            onClick={() => setShowTime(true)} >
            {' '} dynamic </ButtonBase>
          web sites and web applications. <br />
          I'm at home in the creative process whether it's engineering or styling software.
          I'm full of inspiration and creative drive. Let's build the<span className={classes.future}> future</span>.
        </span>
      </Typography>
      {showTime && (
        <div>
          <Backdrop
            className={classes.backdrop}
            open={showTime}
            onClick={() => setShowTime(false)} >
            <p className={classes.clockText}>Lik<MenuRoundedIcon className={classes.lilStack} /> grabbing this clock here</p>
            <Clock
              value={value}
              className={classes.clock}
              size={300}
            />
          </Backdrop>
        </div>
      )}
      {showMern && (
        <div>
          <Snackbar 
            className={classes.snackbar}
            anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
            open={showMern}
            onClick={() => setShowMern(false)}
            message={
              <div>
                <p className={classes.text}><span className={classes.color}>M</span >ongo/<span className={classes.color}>M</span>ySQL Database</p>
                <p className={classes.text}><span className={classes.color}>E</span>xpress Server</p>
                <p className={classes.text}><span className={classes.color}>R</span>eact Frontend Framework</p>
                <p className={classes.text}><span className={classes.color}>N</span>ode JavaScript Environment</p>
              </div>
            }
            />
        </div>
      )}

      {windowX.width > 768 ?
        <Collapse in={checked} {... (checked ? { timeout: 1000 } : {})}>
          {WorkData.map((work) => (
            <ButtonBase
              focusRipple
              key={work.title}
              className={classes.image}
              onClick={() => window.open(work.url, '_blank')}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: work.width,
              }}
            >
              <span
                className={classes.imageSrc}
                alt={work.title}
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
      :
      <Collapse className={classes.entered} in={checked} {... (checked ? { timeout: 1000 } : {})}>
       <div style={{ padding: `${chevronWidth}px` }}>
        <ItemsCarousel
          className={classes.itemsCarousel}
          // onStateChange={() => handleStateChange()}
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={2}
          gutter={20}
          infiniteLoop={true}
          showSlither={true}
          firstAndLastGutter
          leftChevron={
            <div className={classes.leftChevronWrapper}>
              <button 
                className={classes.chevron}>{'<'}
              </button>
            </div>
          }
          rightChevron={
            <div className={classes.rightChevronWrapper}>
              <button 
                className={classes.chevron}>{'>'}
              </button>
            </div>
          }
          outsideChevron={true}
          chevronWidth={chevronWidth}
        >
          {WorkData.map((work) => (
            <ButtonBase
              focusRipple
              key={work.title}
              className={classes.image}
              onClick={() => window.open(work.url, '_blank')}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: work.width,
              }}
            >
              <span
                className={classes.imageSrc}
                alt={work.title}
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
                  {/* {activeItemIndex} */}
                  {work.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          ))}
        </ItemsCarousel>
    </div>
      </Collapse>
      }
    </div>
  );
}