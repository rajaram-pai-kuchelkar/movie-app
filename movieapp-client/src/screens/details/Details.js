import React , {Fragment, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Details.css';
import Header from '../common/header/Header';
import imagecommon from '../../assets/images/imagecommon.jpg';
import video1 from '../../assets/video/illustration.m4v';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import artistData from '../../assets/data/artistData';

const useStyles = makeStyles((theme)=>({
  
    root: {
      minWidth: 275,
    },
    subtitle: {
      lineHeight : 1,
    },
    plot:{
        marginTop : 16,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        width:'100%',
      },
      titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },

}));

export default function Details(){
    const classes = useStyles();
    const [selectedMovie,setSelectedMovie] = useState("");
    useEffect(()=>{
          setSelectedMovie(window.sessionStorage.getItem('selected-movie'));
          
    },[]);

return (
   <React.Fragment>
        <div>
        <Header />
        <div className="details-can">
       
           
            <div className="details-can-leftpane">
                <img width= '100%' src={selectedMovie} alt= "selected movie" />
            </div>
            <div className="details-can-middlepane">
            <Typography className={classes.subtitle} variant="h6" component="h6" gutterBottom>
                Movie Name
            </Typography>
            <Typography className={classes.subtitle} variant="subtitle1" gutterBottom>
                <b>Genre :</b>Action, Adventure, Sci-Fi
            </Typography>
            <Typography className={classes.subtitle} variant="subtitle1" gutterBottom>
                <b>Duration :</b>148
            </Typography>
            <Typography className={classes.subtitle} variant="subtitle1" gutterBottom>
                <b>Release Date :</b>Fri Jul 16 2010
            </Typography>
            <Typography className={classes.subtitle} variant="subtitle1" gutterBottom>
                <b>Rating :</b>8
            </Typography>
            <Typography  className={classes.subtitle} variant="subtitle1" gutterBottom>
                <b>Plot :</b>Details of the Plot of this movie
            </Typography>
            <Typography  className={`${classes.subtitle} ${classes.plot}`} variant="subtitle1" gutterBottom>
                <b>Trailer :</b>
            </Typography>
            <video width='100%' controls src={video1}  />
            </div>
            
            <div className="details-can-rightpane">
            <Typography  className={classes.subtitle} variant="subtitle1" gutterBottom>
                <b>Rate this movie : </b>
            </Typography>
            <StarOutlineIcon></StarOutlineIcon><StarOutlineIcon></StarOutlineIcon><StarOutlineIcon></StarOutlineIcon><StarOutlineIcon></StarOutlineIcon><StarOutlineIcon></StarOutlineIcon>
            <Typography  className={classes.subtitle} variant="subtitle1" gutterBottom>
                <b>Artists : </b>
            </Typography>
            <GridList className={classes.gridList} cellHeight={150} cols={2}>
        {artistData.map((tile) => (
          <GridListTile key={tile.id}>
            <img src= {require(`../../assets/images/${tile.img}`).default} alt={tile.firstName}/>
            <GridListTileBar
              classes={classes.title}
              title={tile.firstName}
             />
           </GridListTile>
        ))}
            </GridList>
            
            </div>
       

        </div>
        </div>

    </React.Fragment>

);

}
