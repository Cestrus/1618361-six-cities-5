import React from 'react';
import PropTypes from 'prop-types';
import {OfferPropTypes} from "../../propTypes";

import Header from '../header/header';
import Footer from '../footer/footer';
import FavoritesList from "../favorites-list/favorites-list";

const Favorites = (props) => {
  const {offers} = props;

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList
              offers={offers}
            />
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

Favorites.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Favorites;
