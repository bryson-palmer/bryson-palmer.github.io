import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';

const useStyles = makeStyles(() => ({
  root: {
    minWidth: '100vw',
    minHeight: '100vh',
    background: '#1c1c1c',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Switch>
          <Route exact path='/' component={Portfolio} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}