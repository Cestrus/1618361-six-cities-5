import React, {PureComponent} from 'react';
import {Map as LeafletMap, TileLayer, Marker} from 'react-leaflet';
import PropTypes from 'prop-types';
import {OfferPropTypes} from "../../propTypes";

export default class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      city: [52.38333, 4.9],
      zoom: 12,
    };
  }

  render() {
    return (
      <section className="cities__map map">
        <LeafletMap center={this.state.city} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.props.offers.map((offer) => {
            return (
              <Marker
                key={offer.id}
                position={offer.coordinates}>
              </Marker>
            );
          }) }
        </LeafletMap>
      </section>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes),
};

