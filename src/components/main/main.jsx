import React from 'react';
import PropTypes from 'prop-types';
import {OfferPropTypes} from "../../propTypes";

import Header from '../header/header';
import PlaceCardList from "../place-card-list/place-card-list";
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.cities = props.cities;
    this.offers = props.offers;
    this.state = {
      city: `Amsterdam`,
      cityOffers: this.offers.filter((offer) => offer.city === `Amsterdam`),
    };

    this.handleCity = this.handleCity.bind(this);
  }

  componentDidMount() {

  }

  handleCity(event) {
    const city = event.target.innerHTML;
    const cityOffers = this.offers.filter((offer) => offer.city === city);
    this.setState({
      city,
      cityOffers
    });
  }

  render() {

    return (
      <div className="page page--gray page--main">
        <Header/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CitiesList
            cities={this.cities}
            onCityClick = {this.handleCity}
          />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{this.state.cityOffers.length} places to stay in {this.state.city}</b>
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
                  offers={this.state.cityOffers}
                  page="main"
                />
              </section>
              <div className="cities__right-section">
                <Map
                  className={`cities__map`}
                  city={this.state.city}
                  offers={this.state.cityOffers}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
};

export default Main;
