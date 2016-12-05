import { Link } from 'react-router';
import React, { Component } from 'react';

class MovieListItem extends Component {

  render() {
    return (
      <div>
        <Link to={`/profile/${this.props.imdbID}`} className="movie-link">
          <li className="movie">
            <div className="image-cropper">
              <img src={this.props.poster} alt="poster"/>
            </div>
            <div className="movie-info">
              <h2>{this.props.title}</h2>
            </div>
          </li>
        </Link>
        <button onClick={() => this.props.onDelete(this.props.imdbID)}>Remove</button>
      </div>

    );
  }
};

MovieListItem.propTypes = {
  imdbID: React.PropTypes.string.isRequired,
  poster: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  director: React.PropTypes.string.isRequired,
  actors: React.PropTypes.string.isRequired,
  plot: React.PropTypes.string.isRequired,
};

export default MovieListItem;
