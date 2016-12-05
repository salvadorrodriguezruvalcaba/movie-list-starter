import React from 'react';
import MoviePreview from './MoviePreview';

const MovieFoundList = (props) => {
  // return (
  //   <ul className="movie-list">
  //     {props.movieFound.map(movie => {

        if (props.movieFound.Error) {
          return <h2> Movie not found! </h2>;
        }
        if (props.movieFound.imdbID) {

          var index = props.movies.map((names => names.imdbID)).indexOf(props.movieFound.imdbID) ;
          var valueButton= "+ Add Movie";
          if (index>=0) {
            valueButton  = "This movie is already in your List!" ;
          }
          return (
            <MoviePreview
              key={props.movieFound.imdbID}
              imdbID={props.movieFound.imdbID}
              title={props.movieFound.Title}
              poster={props.movieFound.Poster}
              director={props.movieFound.Director}
              actors={props.movieFound.Actors}
              plot={props.movieFound.Plot}
              valueButton={valueButton}
              onAdd={props.onAdd}
            />
          );
        }
        return null;

    //   })}
    // </ul>
  // );
}

export default MovieFoundList;
