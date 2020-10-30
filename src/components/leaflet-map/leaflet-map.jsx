import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {OfferPropTypes} from "../../propTypes";
import 'leaflet/dist/leaflet.css';


export default class LeafletMap extends PureComponent {
  constructor(props) {
    super(props);

    this.props = props;
    this.map = null;
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this.state = {
      city: this.props.offers[0].cityCoord,
      zoom: 12,
      offers: this.props.offers,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.setState({
        city: this.props.offers[0].cityCoord,
        offers: this.props.offers,
      });
    }
    this.viewMap();
    this.state.offers.forEach((offer) => {
      this.markToMap(offer.offerCoord);
    });
  }

  componentDidMount() {
    this.initializeMap();
    this.viewMap();
    this.state.offers.forEach((offer) => {
      this.markToMap(offer.offerCoord);
    });
  }

  initializeMap() {
    this.map = leaflet.map(`map`, {
      center: this.state.city,
      zoom: this.state.zoom,
      zoomControl: false,
      marker: true,
    });
  }

  viewMap() {
    this.map.setView(this.state.city, this.state.zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);
  }

  markToMap(offerCoord) {
    leaflet
    .marker(offerCoord, {icon: this.icon})
    .addTo(this.map);
  }

  render() {

    return (
      <section className={this.props.className}>
        <div id="map" style={{height: `100%`}}/>
      </section>
    );
  }
}


LeafletMap.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes),
  className: PropTypes.string,
  city: PropTypes.string,
};

