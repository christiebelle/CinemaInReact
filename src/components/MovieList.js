import React, {Component} from 'react';
import Movie from "./Movie";

class MovieList extends Component{
  render(){
    const movieNodes = this.props.data.map(Movie => {
      return(
        <Movie author={Movie.title} key={Movie.id}>
          {Movie.showtimes}
        </Movie>
      );
    });
    return <div className="movielist">{movieNodes}</div>
  }
}



export default MovieList;
