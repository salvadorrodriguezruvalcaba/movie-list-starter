import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
    }
  }

  handleInputChange(event) {
    const { value, name: attribute } = event.target;

    this.setState(prev => {
      return {
        ...prev,
        [attribute]: value
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { title }  = this.state;

    this.props.onSearch( {title} );
  }

  render() {
    return (
      <form className="movie-form" onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="name"></label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleInputChange.bind(this)}
        />

        <input
          type="submit"
          value="Search"
          disabled={!this.state.title.trim()}
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSearch: React.PropTypes.func.isRequired
};

export default SearchBar;


// import React from 'react';
//
// const SearchBar = (props) => {
//   return (
//     <div>
//     <input
//       className='search-bar'
//       type="text"
//       value={props.value}
//     />
//     <button onClick={() => props.onClick(props.value)}>Search</button>
//     </div>
//   );
// };
//
// SearchBar.propTypes = {
//   // value: React.PropTypes.string.isRequired
// };
//
// export default SearchBar;
