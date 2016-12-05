import React from 'react';
import MovieListItem from './MovieListItem';

const MovieList = (props) => {
  return (
    <ul className="movie-list">
      {props.movies.map(movie => {
        return (
          <MovieListItem
            key={movie.imdbID}
            imdbID={movie.imdbID}
            title={movie.title}
            poster={movie.poster}
            director={movie.director}
            actors={movie.actors}
            plot={movie.plot}
            onDelete={props.onDelete}
          />
        )
      })}
    </ul>
  );
}

export default MovieList;
