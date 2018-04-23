import React, {Component} from 'react';
import MovieList from '../components/MovieList'


class MovieBox extends Component{

  constructor(props){
    super(props);
    this.state = {
      data:[{id: 1, title: "Chariots of Fire", showtimes: "1600, 1730, 2000, 2100, 2230"},
            {id: 2, title: "Singin' In The Rain", showtimes: "1530, 1715, 2015, 2130, 2200"},
            {id: 3, title: "Gone With The Wind", showtimes: "1500, 1730, 1900, 2015, 2145"},
            {id: 4, title: "Calamity Jane", showtimes: "1600, 1730, 1845, 1930, 2200"},
            {id: 5, title: "Casablanca", showtimes: "1600, 1730, 1915, 2145, 2215"}]
    };
  }

  render(){
    return <div className="movie-box">
      <h2>Comment List</h2>
      <CommentList data={this.state.data}/>
    </div>
  }
}

export default MovieBox;
