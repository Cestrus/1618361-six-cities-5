import React from 'react';
import PropTypes from 'prop-types';
import {OfferPropTypes} from "../../propTypes";

import Header from '../header/header';
import PlaceCardList from "../place-card-list/place-card-list";
import LocationsItem from "../locations-item/locations-item";
import Map from '../map/map';

const Main = (props) => {
  const {cities, offers} = props;

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((city) => {
                return (
                  <LocationsItem
                    key={city}
                    city={city}
                  />
                );
              })}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                    Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use href="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <PlaceCardList
                offers={offers}
                page="main"
              />
            </section>
            <div className="cities__right-section">
              <Map
                className={`cities__map`}
                cities={cities}
                offers={offers}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
};

export default Main;
