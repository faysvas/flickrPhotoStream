import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PhotoCard from './PhotoCard';
import logo from './logo.svg';
import './App.css';

class Photos extends Component {
  render() {
    return (
      <Row>
        <Col><PhotoCard/></Col>
        <Col><PhotoCard/></Col>
        <Col><PhotoCard/></Col>
        <Col><PhotoCard/></Col>
      </Row>
    );
  }
}

export default Photos;
