import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

const App = (props) => {
  const {cities, placeCardsData} = props;

  return (
    <Main
      cities = {cities}
      placeCardsData = {placeCardsData}
    />
  );
};

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  placeCardsData: PropTypes.arrayOf(PropTypes.shape({
    imgURL: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
  })),
};

export default App;
