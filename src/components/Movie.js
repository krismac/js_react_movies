import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div className="movie">
        <p className="title"><a href={this.props.link}>{this.props.title}</a></p>
        <p className="release">{this.props.release}</p>
      </div>
    );
  }
}

export default Movie;
