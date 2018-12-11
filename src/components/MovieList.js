import React, { Component } from 'react';
import Movie from './Movie.js'

class MovieList extends Component {
  render() {

    const movieNodes = this.props.data.map((movieItem) => {
      return <Movie
        key={movieItem.id}
        title={movieItem.title}
        release={movieItem.release}
        link={movieItem.link}
        />
    })

    return (
      <div className="movie-list">
        {movieNodes}
      </div>
    )
  }
}

export default MovieList;
