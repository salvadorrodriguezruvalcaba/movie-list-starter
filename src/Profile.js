import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    axios.get(`http://www.omdbapi.com/?i=${this.props.params.id}&plot=full&r=json`)
      .then(resp => {
        this.setState({
          movie: resp.data
        })
      })
      .catch(err => console.log(`Error! ${err}`));

  }

  renderProfile() {
    return (
      <div className="profile">
        <div className="image-cropper">
          <img src={this.state.movie.Poster} alt="avatar"/>
        </div>
        <div className="movie-info">
          <h2>Title: {this.state.movie.Title}</h2>
          <span>Director: {this.state.movie.Director}</span>
          <span>Actors: {this.state.movie.Actors}</span>
          <span>Plot: {this.state.movie.Plot}</span>
        </div>

        <button > Back </button>

      </div>

    );
  }

  render() {
    if (!this.state.movie) {
      return <h2>Loading...</h2>
    }

    return this.renderProfile();
  }
}

export default Profile;
