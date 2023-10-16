import React from "react";

class Search extends React.Component {
  state = {
    search: '',
    type: 'all'
  };

  handleChangeInput = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // console.log('name', name);
    // console.log(`!!! ${name}:${value}`);
    this.setState({ [name]: value });
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };

  handleSearch = () => {
    this.props.searchMovies(this.state.search, this.state.type);
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              type="search"
              name="search"
              className="validate"
              placeholder="Search"
              value={this.state.search}
              onChange={this.handleChangeInput}
              onKeyDown={this.handleKey}
            />
            <button className="btn indigo search-btn" onClick={this.handleSearch}>Search</button>
          </div>
          <form>
            <label className="search">
              <input className="with-gap" name="type" value="all" type="radio" onChange={this.handleChangeInput}/>
              <span className="type-search">All</span>
            </label>
            <label className="search">
              <input className="with-gap" name="type" value="movie" type="radio" onChange={this.handleChangeInput}/>
              <span className="type-search">Movie</span>
            </label>
            <label className="search">
              <input className="with-gap" name="type" value="series" type="radio" onChange={this.handleChangeInput}/>
              <span className="type-search">Series</span>
            </label>
            <label className="search">
              <input className="with-gap" name="type" value="game" type="radio" onChange={this.handleChangeInput}/>
              <span className="type-search">Game</span>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export { Search }