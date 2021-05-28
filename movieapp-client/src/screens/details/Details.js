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
import ReactPlayer from 'react-player'

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
    const [selectedMovieDetails, setSelectedMovieDetails] = useState({"artists":[]});
    const [genres,setGenres] = useState("");

    useEffect(()=>{        
        loadSelectedMovie(window.sessionStorage.getItem('selected-movie-id'));
    },[]);
   
    const loadSelectedMovie = async (movieId)=>{
        const rawResponse = await  fetch(`/api/v1/movies/${movieId}`);
        const movie = await rawResponse.json();
        if ( rawResponse.ok)
            setSelectedMovieDetails( movie);
            const gentotal = movie.genres.reduce((sum,item)=>(sum+", "+item));
            setGenres(gentotal);
      }
    
return (
   <React.Fragment>
        <div >
        <Header />
        <div className="details-can">          
            <div className="details-can-leftpane">
                <img width= '100%' src={selectedMovieDetails.poster_url} alt= "selected movie" />
            </div>
            <div className="details-can-middlepane">
            <Typography className={classes.subtitle} variant="h6" component="h6" gutterBottom>
                {selectedMovieDetails.title}
            </Typography>
            
            <Typography className={classes.subtitle} variant="subtitle1" gutterBottom>
                
                <b>Genre :</b>{genres}
            </Typography>

            <Typography className={classes.subtitle} variant="subtitle1" gutterBottom>
                <b>Duration :</b>{selectedMovieDetails.duration}
            </Typography>
            <Typography className={classes.subtitle} variant="subtitle1" gutterBottom>
                <b>Release Date :</b>{selectedMovieDetails.release_date}
            </Typography>
            <Typography className={classes.subtitle} variant="subtitle1" gutterBottom>
                <b>Rating :</b>{selectedMovieDetails.rating}
            </Typography>
            <Typography  className={classes.subtitle} variant="subtitle1" gutterBottom>
                <b>Plot :</b> <a href={selectedMovieDetails.wiki_url}>{`{Wiki Link}`}</a>{selectedMovieDetails.storyline} 
            </Typography>
            <Typography  className={`${classes.subtitle} ${classes.plot}`} variant="subtitle1" gutterBottom>
                <b>Trailer :</b>
            </Typography>
            <ReactPlayer width='100%' url={selectedMovieDetails.trailer_url} />
            
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
        
        {selectedMovieDetails.artists.map((tile) => (
          <GridListTile key={tile.id}>
            <img src= {tile.profile_url} alt={tile.first_name}/>
            <GridListTileBar
              classes={classes.title}
              title={`${tile.first_name} ${tile.last_name}`}
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
