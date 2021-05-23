import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';


const theme= createMuiTheme({
    palette: {
      primary: blue,
    },
    spacing:{
        unit: 10,
    },
    typography: { 
                useNextVariants: true,
              }
  });

export default theme;