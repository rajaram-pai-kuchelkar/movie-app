import React , { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { MovieFilterSharp } from '@material-ui/icons';


const useStyles = makeStyles(theme=>({
  root: {
    
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    overflow: 'hidden',
    //backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    width:'100%',
  },
  title: {
    //color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


async function getMovies() {
  
return new Promise(async (resolve,reject)=>{  
  try {
      const rawResponse = await fetch('/api/v1/movies', {
          method: 'GET',
      });

      const result = await rawResponse.json();
      if(rawResponse.ok ) {     
          resolve(result);

      } else {
          const error = new Error();
          error.message = result.message || 'Something went wrong.';
      }
  } catch(e) {
      alert(`Error: ${e.message}`);
  }
});
}
 

const MovieUpcomingList= ()=> {
  const classes = useStyles();
  const [movieList,setMovieList] = useState([]);
  

  const loadMovies = async ()=>{
    const rawResponse = await  fetch('/api/v1/movies');
    const {movies} = await rawResponse.json();
    const upcomingMovies= await movies.filter((movie)=>{
      return (movie.status=="PUBLISHED")});
    setMovieList( upcomingMovies);        
  }
  
  useEffect(()=>{
   loadMovies();
  },[]
  );
  
 
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cellHeight={250} cols={6}>
        {movieList.map((tile) => (
          <GridListTile key={tile.id}>
            <img src= {tile.poster_url} alt={tile.title}/>
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default MovieUpcomingList;



