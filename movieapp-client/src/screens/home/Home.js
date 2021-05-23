import React , {Fragment} from 'react';
import './Home.css';
import Header from '../common/header/Header';
import MovieUpcomingList from '../movie-upcoming-list/MovieUpcomingList';
import MovieReleaseList from '../movie-release-list/MovieReleaseList';
import MovieReleaseFilter from '../movie-release-filter/MovieReleaseFilter';


export default function Home(){

return (
    <Fragment>
   
        <Header />
        
        <div className= "movie-subheading">Upcoming Movies</div>
        <MovieUpcomingList />
        <div className= "movie-release">
                <div className="movie-release-display">
                    <MovieReleaseList />
                </div>
                <div className= "movie-release-filter">
                    <MovieReleaseFilter /> 
                </div>
        </div>
       
   
    </Fragment>
);

}
