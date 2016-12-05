import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import MovieFoundList from './MovieFoundList';
import MovieList from './MovieList';
import axios from 'axios';
import {} from 'react-bootstrap';
//import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movieFound: {
                    imdbID:'',
                    title:'',
                    poster:'',
                    director:'',
                    actors:'',
                    plot:''},
      movies: []
    };
  }

  componentDidMount() {
      const savedUserInputList = JSON.parse(localStorage.getItem('movies'));

      if (savedUserInputList) {
        this.setState({
          ...this.state,
          movies: savedUserInputList
        });
      }
    }

  handleOnClickSearch(attribute) {
      axios.get(`http://www.omdbapi.com/?t=${attribute.title}&plot=short&r=json`)
        .then(resp => {
              const movie =  resp.data || null;
              this.setState({
                ...this.state,
                movieFound: movie
              });

          })
          .catch(err => console.log(`Error! ${err}`));

  }

  handleAddMovie(movie){
    this.setState(prev => ({
      ...prev,
      movies: [movie, ...prev.movies],
    }));

    let movies = JSON.parse(localStorage.getItem('movies')) || [];

    movies = [movie, ...movies];
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  getMovieFounded() {
    if (!this.state.movieFound) {
      return this.state.movieFound;
    }
    return this.state.movieFound;
  }

  getStorageMovies() {
    return this.state.movies;
  }

  handleDeleteMovie(keyName){

    var index = this.state.movies.map((names => names.imdbID)).indexOf(keyName);
    var newMovieList = this.state.movies.slice(0, index).concat(this.state.movies.slice(index +1));

    this.setState(prev => ({
      ...prev,
      movies: newMovieList,
    }));

    // localStorage.removeItem('movies', JSON.stringify(keyName) );
    localStorage.setItem('movies', JSON.stringify(newMovieList));

  }

  render() {

    return (
      <div className="App">

        <SearchBar onSearch={this.handleOnClickSearch.bind(this)} />
        <MovieFoundList onAdd={this.handleAddMovie.bind(this)} movieFound={this.getMovieFounded()} movies={this.getStorageMovies()}/>
        <MovieList onDelete={this.handleDeleteMovie.bind(this)} movies={this.getStorageMovies()} />

      </div>

    );
  }

}

export default App;
