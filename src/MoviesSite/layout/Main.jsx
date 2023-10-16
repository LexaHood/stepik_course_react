import React from 'react';
import { Search } from "../components/Search";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;
export default class Main extends React.Component {

  state = {
    movies: [],
    loading: false
  };

  componentDidMount() {
    this.searchMovies('matrix');
  }

  searchMovies = (searchValue, type = 'all') => {
    this.setState({ movies: [], loading: true });
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}${type !== 'all' ? '&type=' + type : ''}`)
      .then(res => res.json())
      .then(movies => {
        if (movies.Response === 'True') {
          this.setState({ movies: movies.Search })
        }
        this.setState({ loading: false })
      });
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <>
        <main className="container content">
          <Search searchMovies={this.searchMovies} />
          {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>
      </>
    );
  }
}