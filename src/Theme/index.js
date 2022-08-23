import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '.swal2-container': {
          zIndex: 9999
        },
        '.MuiOutlinedInput-root': {
          '&:hover fieldset': {
            borderColor: '#08A870 !important',
          },
        },
        '.MuiButton-contained': {
          boxShadow: 'none !important'
        }
      },
    },
  },
  textField: {

  },
  typography: { 
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontSize: 14,
    display4: {
      fontSize: 14,
    },
    display3: {
      fontSize: 14,
    },
    display2: {
      fontSize: 14,
    },
    display1: {
      fontSize: 14,
    },
    headline: {
      fontSize: 14,
    },
    title: {
      fontSize: 14,
    },
    subheading: {
      fontSize: 14,
    },
    body2: {
      fontSize: 14,
    },
    body1: {
      fontSize: 14,
    },
    caption: {
      fontSize: 14,
    },
    button: {
      fontSize: 14,
    },
  },
  palette:  {
    primary: {
      main: "#08A870",
      //main: "#01a54f",
    },

    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50"
    },
  },
});
export default theme;