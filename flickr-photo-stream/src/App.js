import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Photos from './Photos';
import PhotoCard from './PhotoCard';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
    photos: ['test', 'test2']
  };

  render() {
    const { photos } = this.state;
        const photoCards = photos.map((photo, idx) => (
          <PhotoCard props={photo} key={idx}  />
    ));
    return (
      <Container>
        {photoCards}
      </Container>
    );
  }
}

export default App;
