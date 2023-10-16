import React from 'react';
import { Movie } from './Movie';

function Movies(props) {
  const { movies = [] } = props;

  console.log('movieArray', movies);
  return (
    <div className="movies">
      { movies.length ? movies.map(movie => <Movie key={movie.imdbID} {...movie}/>) : <h5>Nothing Found</h5> }
    </div>
  );
}

export { Movies };