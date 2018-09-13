import React, { Component } from 'react';
import './Map.css';
import mapboxgl from 'mapbox-gl';

class Map extends Component {
  _mapContainer;

  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoiamlhbmd5bnR6IiwiYSI6ImNqbHZpdmNkajB2NDYzbHA5YW00cW9yYmEifQ.y40HoWZWDiMSjzSnvj2JGw';
    const map = new mapboxgl.Map({
      container: this._mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
    });
  }

  render() {
    return <div className={'mapRoot'} ref={el => (this._mapContainer = el)} />;
  }
}

export default Map;
