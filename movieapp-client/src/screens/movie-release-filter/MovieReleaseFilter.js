import 'date-fns';
import React, {Fragment, useState, useEffect } from 'react';
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
  
  const names = [ 'rakesj', 'krikesh', 'fooresh', 'pranesh'];
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;
  const [text,setText] = useState("");
  const [personName, setPersonName] = React.useState([]);
  const [selectedDate,setSelectedDate] = React.useState(new Date());
  const [hasError,setHasError] = React.useState(false);
  const [movieName, setMovieName] = useState("");

  const [genres,setGenres] = useState([]);
  const [genresName,setGenresName] = useState([]);

  const [artists,setArtists] = useState([]);
  const [artistsName, setArtistsName] = useState([]);

  const [fromDate, setFromDate]= useState("");
  const [toDate, setToDate] = useState("");

  const loadGenres = async ()=>{
    const rawResponse = await  fetch('/api/v1/genres');
    const {genres} = await rawResponse.json();
    if (rawResponse.ok ){ 
      let arr =[];
      genres.map((item)=>{arr.push(item.genre);});
      setGenres(arr);
    }
  }
  
  const loadArtists = async ()=>{
    const rawResponse = await  fetch('/api/v1/artists');
    const {artists} = await rawResponse.json();
    if (rawResponse.ok ){ 
        let arr =[];
        artists.map((item)=>{
          arr.push(`${item.first_name} ${item.last_name}`);
      });
      setArtists(arr);
    }
  }
  
  useEffect(()=>{
    loadGenres();
    loadArtists();
   },[]
   );
   
 
  const  onFormSubmitted = (e) => {
    e.preventDefault();  
    console.log("form submitted"); 
    console.log(artistsName);
  }

  
  const handleChangeArtists = (event) => {
    setArtistsName(event.target.value);
    
  };

  const handleChangeGenres = (event) => {
    setGenresName(event.target.value);
  };

  const handleDateChange = (e)=> {
    setSelectedDate(e.target.value);
  }

return (
<MuiPickersUtilsProvider utils={DateFnsUtils}>
  <Fragment>
        
      <Card className={classes.root}>
      
    <form className={classes.root} onSubmit={onFormSubmitted}>
            <CardContent>
              <Typography className={classes.title}  gutterBottom>
                FIND MOVIES BY :
              </Typography>
  
              <FormControl className={classes.carditems}>
                <InputLabel htmlFor="movie-name">Movie Name</InputLabel>
                <Input type="text" placeholder="Movie Name" onChange={(e)=>setMovieName(e.target.value)}/>        
              </FormControl>
              <FormControl className={classes.carditems} >
                <InputLabel id="demo-mutiple-checkbox-label" >Genres</InputLabel>
                <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={genresName}
                  onChange={handleChangeGenres}
                  input={<Input />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {genres.map((item) => (
                    <MenuItem key={item} value={item} >
                      <Checkbox checked={genresName.indexOf(item) > -1} />
                      <ListItemText primary={item} />
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
                value={artistsName}
                onChange={handleChangeArtists}
                input={<Input />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {artists.map((name) => (
                  <MenuItem key={name} value={name} >
                    <Checkbox checked={artistsName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
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
      </form>
    </Card>
  </Fragment>
</MuiPickersUtilsProvider>
    
);
}
