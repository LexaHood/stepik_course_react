import React from 'react';
import { Movie } from './Movie';

function Movies(props) {
  const { movies } = props;

  console.log('movieArray', movies);
  return (
    <div className="movies">
      {movies.map(movie => <Movie key={movie.imdbID} {...movie}/>)}
    </div>
  );
}

export { Movies };