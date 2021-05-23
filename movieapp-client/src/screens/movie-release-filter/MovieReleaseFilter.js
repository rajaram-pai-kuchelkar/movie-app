import 'date-fns';
import React, {Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


import NativeSelect from '@material-ui/core/NativeSelect';

import theme from '../theme';
import { grey } from '@material-ui/core/colors';


const useStyles = makeStyles((theme)=>({
  
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: theme.palette.primary.light,
  },
  carditems :{
    margin : theme.spacing(1.5),
    maxWidth : 240,
    minWidth : 240,
    fontSize:14,
    color: grey,
  },
  pos: {
    marginBottom: 12,
    
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function MovieReleaseFilter() {
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  
  const classes = useStyles();
  const  onFormSubmitted = (e) => {
    e.preventDefault();
    
    console.log("form submitted");
  
  }

  const bull = <span className={classes.bullet}>•</span>;
  const [text,setText] = useState("");
  const [personName, setPersonName] = React.useState([]);
  const [selectedDate,setSelectedDate] = React.useState(new Date());
  const [hasError,setHasError] = React.useState(false);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

const handleDateChange = (e)=> {
  setSelectedDate(e.target.value);
}

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Fragment>
      
    <Card className={classes.root}>
     {/* <form className={classes.root} validate autoComplete="off"> */}
   <ValidatorForm className={classes.root} onSubmit={onFormSubmitted}>
      <CardContent>
        <Typography className={classes.title}  gutterBottom>
          FIND MOVIES BY :
        </Typography>
      
      
        <TextValidator id="movie-name" className={classes.carditems} label="Movie Name" 
         validators={['required']}
         errorMessages={['Movie Name cannot be empty']}
         placeholder="Movie Name" 
         ></TextValidator>

<FormControl className={classes.carditems} >
       <InputLabel id="demo-mutiple-checkbox-label" >Genres</InputLabel>
        <Select
        
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} >
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
   
      
      <FormControl className={classes.carditems} error={hasError}>
       <InputLabel id="demo-mutiple-checkbox-label">Artists</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} >
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        {hasError && <FormHelperText>This is required!</FormHelperText>}
      </FormControl>

  <FormControl  error={hasError}>
  <TextField
    id="date"
    label="Release Date Start"
    type="date"
    format="dd-MM-yyyy"
    className={classes.carditems}
    InputLabelProps={{
      shrink: true,
    }}
  />
  </FormControl>

  <FormControl  error={hasError}>
<TextField
    id="date"
    label="Release Date End"
    type="date"
    format="dd-MM-yyyy"
    className={classes.carditems}
    InputLabelProps={{
      shrink: true,
    }}
  />
</FormControl>



      </CardContent>
      <CardActions>
        <Button className={classes.carditems} type="submit" variant="contained" color="primary">APPLY</Button>
      </CardActions>
      </ValidatorForm>
    </Card>
    </Fragment>
    </MuiPickersUtilsProvider>
    
  );
}



/*
 <Typography variant="h5" component="h2" color= {theme.palette.primary.main}>
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
*/
/* 

<ValidatorForm className="subscriber-form" onSubmit={onFormSubmitted}>


                    <TextValidator
                        id="name"
                        label="Enter Name"
                        type="text"
                        name="name"
                        onChange={inputChangedHandler}
                        value={name}
                        validators={['required']}
                        errorMessages={['Name cannot be empty']}
                    >
                    </TextValidator>



 <NativeSelect
          className={classes.selectEmpty}
           value={state.age}
         name="age"
           onChange={handleChange}
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value="" disabled>
            Placeholder
          </option>


                    */
