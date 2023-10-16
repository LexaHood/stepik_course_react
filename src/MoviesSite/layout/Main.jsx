import React from 'react';
import { Search } from "../components/Search";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";

export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=de468341&s=matrix')
      .then(res => res.json())
      .then(movies => this.setState({ movies: movies.Search }));
  }

  searchMovies = (searchValue, type = 'all') => {
    // console.log(`http://www.omdbapi.com/?apikey=de468341&s=${searchValue}${type !== 'all' ? '&type=' + type : ''}`);
    this.setState({ movies: [] })
    fetch(`http://www.omdbapi.com/?apikey=de468341&s=${searchValue}${type !== 'all' ? '&type=' + type : ''}`)
      .then(res => res.json())
      .then(movies => {
        if (movies.Response === 'True') {
          this.setState({ movies: movies.Search, loading: false })
          console.log('im here');
        }
      });
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <main className="container content">
        <Search searchMovies={this.searchMovies}/>
          {movies?.length ? <Movies movies={movies} /> : <Preloader/>}
        </main>
      </>
    );
  }
}