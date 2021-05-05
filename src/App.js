import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import './App.css';


// const useStyles = makeStyles(() => ({
//   root: {
//   },
// }));

export default function App() {
  // const classes = useStyles();
  return (
    <Router>
      {/* <div className={classes.root}>  */}
        <CssBaseline /> 
        <Switch>
          <Route exact path='/'>
            <Portfolio />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
        </Switch>
      {/* </div>  */}
    </Router>
  );
}
