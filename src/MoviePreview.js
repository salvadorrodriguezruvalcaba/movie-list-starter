
import React, { Component } from 'react';

class MoviePreview extends Component {
  constructor() {
    super();

    this.state = {
      imdbID: '',
      title: '',
      poster: '',
      plot: '',
      director: '',
      actors: '',
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const { imdbID, title, poster, plot, director, actors } = this.props;
    this.props.onAdd({ imdbID, title, poster, plot, director, actors });
  }

  render() {

    return (

      <form className="movie-form" onSubmit={this.handleSubmit.bind(this)}>
        <li className="movie-list">
          <div className="image-poster">
            <img src={this.props.poster} alt="poster"/>
          </div>
          <div className="movie-info">
            <h2>Title:{this.props.title}</h2>
            <p>Plot:{this.props.plot}</p>
          </div>
        </li>

        <input
          type="submit"
          value={this.props.valueButton}
          disabled={this.props.valueButton!=='+ Add Movie'}
        />
      </form>
    );
  }
}

MoviePreview.propTypes = {
  // onAdd: React.PropTypes.func.isRequired
};

export default MoviePreview;
