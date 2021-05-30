import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import movieData from '../../assets/data/movieData';
import { Link,useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    //display: 'flex',
    //flexWrap: 'wrap',
    //justifyContent: 'space-evenly',
    //overflow: 'hidden',
    //width:'100%',
    //backgroundColor: theme.palette.background.paper,
  },
  gridList: {
   display: 'flex',
   flexWrap: 'wrap',
   justifyContent: 'space-around',
   overflow: 'hidden',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    //transform: 'translateY(0)',
   // width:'100%',
  },
  gridListTile:{
   //width:'300px',
   '&:hover' : {
     cursor : 'pointer',
   },
   
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function MovieReleaseList() {
  const classes = useStyles();
  const history = useHistory([]);
  const dispatch = useDispatch();
  const releaseMovieList = useSelector(state=>state.filteredMovies);

  const loadMovies = async ()=>{
    const rawResponse = await  fetch('/api/v1/movies');
    const {movies} = await rawResponse.json();
    if(rawResponse.ok){
      const releasedMovies= movies.filter((movie)=>{
                  return (movie.status=="RELEASED")});
      //setReleaseMovieList( releasedMovies);   
      dispatch({"type": "MOVIES",payload: releasedMovies });
      dispatch({"type": "FILTERED_MOVIES", payload: releasedMovies});
    }
  }

  useEffect(()=>{
    loadMovies();
   },[]
  );
 
   const onTileClickHandler= (selectedMovie,movieId)=>{
  //e.preventDefault();
  console.log("key is ",selectedMovie);
  window.sessionStorage.setItem('selected-movie', selectedMovie);
  window.sessionStorage.setItem('selected-movie-id', movieId);
  history.push('/details');
 }
  return (
    <Fragment>
      <GridList cellHeight={350}  cols={4} className={classes.gridList}>

        {releaseMovieList.map((tile) => (
          <GridListTile key={tile.id} className={classes.gridListTile} onClick={()=>{onTileClickHandler(tile.poster_url,tile.id)}}>
            <img src={tile.poster_url} alt={tile.title}  />
             <GridListTileBar
              title={tile.title}
              subtitle={<span>Released on: {tile.release_date}</span>}
  
            /> 
          </GridListTile>
        ))}
      </GridList> 
      </Fragment>
  );
}
