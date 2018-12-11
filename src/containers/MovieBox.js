import React, { Component } from 'react';
import MovieList from '../components/MovieList.js'

class MovieBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: 1,
          title: "Life Itself",
          release: "21 September 2018",
          link: "https://www.imdb.com/title/tt5989218"
        },
        {
          id: 2,
          title: "Spider-Man: Into the Spider-Verse",
          release: "14 December 2018",
          link: "https://www.imdb.com/title/tt4633694"
        },
        {
          id: 3,
          title: "Mary Queen of Scots",
          release: "7 December 2018",
          link: "https://www.imdb.com/title/tt2328900/?ref_=nv_sr_1"
        },
        {
          id: 4,
          title: "Lego Movie 2: The Second Part",
          release: "8 February 2019",
          link: "https://www.imdb.com/title/tt3513498/?ref_=nv_sr_1"
        },
        {
          id: 5,
          title: "Captain Marvel",
          release: "8 March 2019",
          link: "https://www.imdb.com/title/tt4154664/"
        }
      ]
    }
  }

  render() {
    return (
      <div className="movie-box">
        <div id="title">
        <h1>Upcoming Movies</h1>
        </div>
        <MovieList data={this.state.movies}/>
        <div id="button"><a href="https://www.imdb.com/calendar/?region=gb">Click to View All Upcoming Releases</a></div>
      </div>
    )
  }
}

export default MovieBox;
