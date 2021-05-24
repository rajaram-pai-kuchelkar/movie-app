import React , {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Login.css';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CenterFocusStrong } from '@material-ui/icons';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    justifySelf:'center',
    backgroundColor: theme.palette.background.paper,
    width:400,
   
 
    
  },
  tabs: {
      color:theme.palette.primary.main,
      backgroundColor: theme.palette.background.paper,
      
  },
  formcontrol: {
    display: 'flex',
    width : 300,
    marginTop:theme.spacing(1.5), 
    marginLeft:34,

  },
  tabpanel:{
      display:'flex',
      flexDirection: 'column',
      justifyContent:'center',
     
  },
  btn:{
      marginTop : 30,
      marginLeft : '50%',
      transform : 'translateX(-50%)',
  }

}));

export default function Login(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} 
        className={classes.tabs}
        variant="fullWidth"
        onChange={handleChange} 
        aria-label="simple tabs example">
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Register" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      
      <TabPanel className={classes.tabpanel} value={value} index={0}>
      
        <FormControl className={classes.formcontrol}>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input required type="text" id="username" />
        </FormControl>

        <FormControl className={classes.formcontrol} >
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input required type="password" id="password"  />  
        </FormControl>
        <Button  className={classes.btn} id="btn-login" color="primary" variant="contained" onClick = {props.toggleModal} >Login</Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <FormControl required className={classes.formcontrol}>
          <InputLabel htmlFor="username">First Name</InputLabel>
          <Input required type="text" id="FirstName" aria-describedby="helper-firstname"/>
          <FormHelperText id="helper-firstname">required</FormHelperText>
        </FormControl>
        <FormControl required className={classes.formcontrol}>
          <InputLabel htmlFor="username">Last Name</InputLabel>
          <Input required type="text" id="LastName" aria-describedby="helper-lastname"/>
          <FormHelperText id="helper-lastname">required</FormHelperText>
        </FormControl>

        <FormControl required className={classes.formcontrol}>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input required type="text" id="Email" aria-describedby="helper-username"/>
          <FormHelperText id="helper-username">required</FormHelperText>
        </FormControl>
        <FormControl required className={classes.formcontrol}>
          <InputLabel htmlFor="username">Password</InputLabel>
          <Input required type="password" id="Password" aria-describedby="helper-password"/>
          <FormHelperText id="helper-password">required</FormHelperText>
        </FormControl>
        <FormControl required className={classes.formcontrol}>
          <InputLabel htmlFor="username">Contact Number</InputLabel>
          <Input required type="tel" id="Password" aria-describedby="helper-tel"/>
          <FormHelperText id="helper-tel">required</FormHelperText>
        </FormControl>
        <Button  className={classes.btn} id="btn-login" color="primary" variant="contained" onClick = {props.toggleModal} >Register</Button>

      </TabPanel>

      
      
    </div>
  );
}
