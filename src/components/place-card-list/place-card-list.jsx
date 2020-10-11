import React, {PureComponent} from 'react';
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import PlaceCard from "../place-card/place-card";

class PlaceCardList extends PureComponent {
  constructor(props) {
    super(props);
    this.history = props.history;
    this.offers = props.offers;
    this.handlePlaceCardClick = this.handlePlaceCardClick.bind(this);
    this.handlePlaceCardMouseEnter = this.handlePlaceCardMouseEnter.bind(this);

    this.state = {
      chosenRoom: null,
    };
  }

  handlePlaceCardMouseEnter(offer) {
    this.setState({
      chosenRoom: offer,
    });
  }

  handlePlaceCardClick() {
    this.history.push(`/offer/` + this.state.chosenRoom.id);
  }

  render() {
    return (
      <div className="cities__places-list places__list tabs__content">
        {this.offers.map((offer) => {
          return (
            <PlaceCard
              key={offer.id}
              offer={offer}
              onPlaceCardMouseEnter={this.handlePlaceCardMouseEnter}
              onPlaceCardClick={this.handlePlaceCardClick}
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
    city: PropTypes.string,
    imgURL: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
    isFavorites: PropTypes.bool,
    bedrooms: PropTypes.number,
    maxAdults: PropTypes.number,
    whatsInside: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.number,
  })),
  history: PropTypes.object,
};

export default withRouter(PlaceCardList);
