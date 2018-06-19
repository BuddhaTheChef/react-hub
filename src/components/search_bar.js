import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }
  render() {
    return (
      <div>
        <h1 className="main-title">YouTube</h1>
      <div className="search-bar-main">
        <input
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value)} />
      </div>
    </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
 }

export default SearchBar;
