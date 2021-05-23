import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import movieData from '../../assets/data/movieData';
import { Link,useHistory } from 'react-router-dom';

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
 const onTileClickHandler= ()=>{
  //e.preventDefault();
  history.push('/details');
 }
  return (
    <Fragment>
      <GridList cellHeight={350}  cols={4} className={classes.gridList}>
      {/*   <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
      </GridListTile> */}

        {movieData.map((tile) => (
          <GridListTile key={tile.img} className={classes.gridListTile} onClick={onTileClickHandler}>
            <img src={require(`../../assets/images/${tile.img}`)} alt={tile.title}  />
             <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            /> 
          </GridListTile>
        ))}
      </GridList> 
      </Fragment>
  );
}
