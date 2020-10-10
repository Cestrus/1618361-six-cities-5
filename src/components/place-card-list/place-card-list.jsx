import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from "../place-card/place-card";

class PlaceCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.offers = props.offers;
    this.handlePlaceCardClick = this.handlePlaceCardClick.bind(this);
    this.handlePlaceCardMouseEnter = this.handlePlaceCardMouseEnter.bind(this);

    this.state = {
      chosenPlaceCard: null,
    };
  }

  handlePlaceCardMouseEnter(offer) {
    this.setState({
      chosenPlaceCard: offer,
    });
  }

  handlePlaceCardClick(ev) {
    // eslint-disable-next-line no-console
    console.log(ev);
  }

  render() {
    return (
      <div className="cities__places-list places__list tabs__content">
        {this.offers.map((offer) => {
          return (
            <PlaceCard
              key={offer.id}
              offer={offer}
              onPlaceCardClick={this.handlePlaceCardClick}
              onPlaceCardMouseEnter={this.handlePlaceCardMouseEnter}
            />
          );
        })}
      </div>
    );
  }
}

PlaceCardList.propTypes = {
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
  onPlaceCardClick: PropTypes.func,
};

export default PlaceCardList;
