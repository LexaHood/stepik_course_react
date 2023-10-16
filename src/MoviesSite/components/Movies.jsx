import React from 'react';
import { Movie } from './Movie';

function Movies(props) {
  const { movies = [] } = props;

  console.log('movieArray', movies);
  return (
    <div className="movies">
      { movies.length ? movies.map(movie => <Movie key={movie.imdbID} {...movie}/>) : <h4>Nothing Found</h4> }
    </div>
  );
}

export { Movies };