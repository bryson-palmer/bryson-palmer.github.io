import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import './App.css';


// const useStyles = makeStyles(() => ({
//   root: {
//     textDecoration: 'none',
//   },
// }));

export default function App() {
  // const classes = useStyles();
  return (
    <Router>
      <div>
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
