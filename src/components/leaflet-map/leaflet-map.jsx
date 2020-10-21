import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {OfferPropTypes} from "../../propTypes";
import 'leaflet/dist/leaflet.css';


export default class LeafletMap extends PureComponent {
  constructor(props) {
    super(props);

    this.map = null;
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this.state = {
      city: [52.38333, 4.9],
      zoom: 12,
    };
  }

  componentDidMount() {
    this.initializeMap();
    this.props.offers.forEach((offer) => {
      this.markToMap(offer.coordinates);
    });
  }

  initializeMap() {
    this.map = leaflet.map(`map`, {
      center: this.state.city,
      zoom: this.state.zoom,
      zoomControl: false,
      marker: true,
    });

    this.map.setView(this.state.city, this.state.zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);
  }

  markToMap(offerCords) {
    leaflet
    .marker(offerCords, {icon: this.icon})
    .addTo(this.map);
  }

  render() {

    return (
      <section className="cities__map map">
        <div id="map" style={{height: `100%`}}/>
      </section>
    );
  }
}


LeafletMap.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes),
};

