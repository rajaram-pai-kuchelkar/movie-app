import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { Paper } from '@material-ui/core';


const theme= createMuiTheme({
    palette: {
      primary: blue,
      background : Paper,
    },
    spacing:{
        unit: 10,
    },
    typography: { 
                useNextVariants: true,
              }
  });

export default theme;