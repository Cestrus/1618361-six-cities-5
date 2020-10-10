import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header';
import PlaceCard from "../place-card/place-card";
import LocationsItem from "../locations-item/locations-item";

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.handlePlaceCardClick = this.handlePlaceCardClick.bind(this);
  }

  handlePlaceCardClick(ev) {
    // eslint-disable-next-line no-console
    console.log(ev.target);
  }

  render() {
    const {cities, offers} = this.props;

    return (
      <div className="page page--gray page--main">
        <Header/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                {cities.map((city, index) => {
                  return (
                    <LocationsItem
                      key={index}
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
                <div className="cities__places-list places__list tabs__content">
                  {offers.map((offer) => {
                    return (
                      <PlaceCard
                        key={offer.id}
                        offer={offer}
                        onPlaceCardClick={this.handlePlaceCardClick}
                      />
                    );
                  })}
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"/>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    imgURL: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
    bedrooms: PropTypes.number,
    maxAdults: PropTypes.number,
    whatsInside: PropTypes.arrayOf(PropTypes.string),
  })),
};

export default Main;
