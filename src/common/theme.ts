import { createMuiTheme } from '@material-ui/core';
import { blue, pink } from '@material-ui/core/colors';

// Overriding some default value so it looks a bit better
export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: blue[200],
    },
    secondary: {
      main: pink[200],
    },
  },
});
