import React, {PureComponent} from 'react';
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import {OfferPropTypes} from "../../propTypes";
import PlaceCard from "../place-card/place-card";

class PlaceCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.handlePlaceCardClick = this.handlePlaceCardClick.bind(this);
    this.handlePlaceCardMouseEnter = this.handlePlaceCardMouseEnter.bind(this);

    this.state = {
      chosenRoom: null,
    };
  }

  handlePlaceCardMouseEnter(offer) {
    const oldChosenRoom = this.state.chosenRoom;
    if (offer !== oldChosenRoom) {
      this.setState({
        chosenRoom: offer,
      });
    }
  }

  handlePlaceCardClick() {
    // some logic
  }

  render() {
    const styleClasses = (this.props.page === `main`)
      ? `cities__places-list places__list tabs__content`
      : `near-places__list places__list`;

    return (
      <div className={styleClasses}>
        {this.props.offers.map((offer) => {
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
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  page: PropTypes.string.isRequired,
};

export default withRouter(PlaceCardList);
