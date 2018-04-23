import React from 'react';

const Movie=(props) =>
    <div className="Movie">
      <h4 className="MovieTitle">{props.title}</h4>
        {props.children};
    </div>

export default Movie;
