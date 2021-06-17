import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2da296',
      light: '#2e85a8',
      dark: '#352bba'
    },
    secondary: {
      main: '#2e85a8',
    },
    warning: {
      main: '#ff9d28'
    },
    error: {
      main: '#fe232c',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;