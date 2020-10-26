import React from 'react';
import PropTypes from 'prop-types';
import LeafletMap from '../leaflet-map/leaflet-map';


const Map = (props) => {
  const {className = ``, ...restProps} = props;

  return (
    <LeafletMap
      className = {`${className} map`}
      {...restProps}
    />
  );
};

Map.propTypes = {
  className: PropTypes.string,
};

export default Map;
