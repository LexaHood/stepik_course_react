import React from "react";

class Search extends React.Component {
  state = {
    search: ''
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search);
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              type="search"
              className="validate"
              placeholder="Search"
              value={this.state.search}
              onChange={(event) => this.setState({ search: event.target.value })}
              onKeyDown={this.handleKey}
            />
            <button className="btn indigo search-btn" onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
          </div>
        </div>
      </div>
    );
  }
}

export { Search }