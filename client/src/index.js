import React from 'react';
import ReactDOM from 'react-dom';
// import { ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import App from './App';
// import theme from './theme';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <ThemeProvider theme={theme}>
  <App />,
  // </ThemeProvider>,
  document.querySelector('#root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();