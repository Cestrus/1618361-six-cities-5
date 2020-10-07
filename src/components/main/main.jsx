import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';


const Main = (props) => {

  const {cities, placeCardsData} = props;

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>{cities[0]}</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>{cities[1]}</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>{cities[2]}</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>{cities[3]}</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>{cities[4]}</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>{cities[5]}</span>
                </a>
              </li>
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
                <article className="cities__place-card place-card">
                  <div className="place-card__mark">
                    <span>Premium</span>
                  </div>
                  <div className="cities__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src={placeCardsData[0].imgURL} width="260" height="200" alt="Place image"/>
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{placeCardsData[0].price}</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                      </div>
                      <button className="place-card__bookmark-button button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                          <use href="#icon-bookmark"/>
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{width: `80%`}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">{placeCardsData[0].name}</a>
                    </h2>
                    <p className="place-card__type">{placeCardsData[0].type}</p>
                  </div>
                </article>

                <article className="cities__place-card place-card">
                  <div className="cities__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src={placeCardsData[1].imgURL} width="260" height="200" alt="Place image"/>
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{placeCardsData[1].price}</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                      </div>
                      <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                          <use href="#icon-bookmark"/>
                        </svg>
                        <span className="visually-hidden">In bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{width: `80%`}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">{placeCardsData[1].name}</a>
                    </h2>
                    <p className="place-card__type">{placeCardsData[1].type}</p>
                  </div>
                </article>

                <article className="cities__place-card place-card">
                  <div className="cities__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src={placeCardsData[2].imgURL} width="260" height="200" alt="Place image"/>
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{placeCardsData[2].price}</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                      </div>
                      <button className="place-card__bookmark-button button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                          <use href="#icon-bookmark"/>
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{width: `80%`}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">{placeCardsData[2].name}</a>
                    </h2>
                    <p className="place-card__type">{placeCardsData[2].type}</p>
                  </div>
                </article>

                <article className="cities__place-card place-card">
                  <div className="place-card__mark">
                    <span>Premium</span>
                  </div>
                  <div className="cities__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src={placeCardsData[3].imgURL} width="260" height="200" alt="Place image"/>
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{placeCardsData[3].price}</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                      </div>
                      <button className="place-card__bookmark-button button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                          <use href="#icon-bookmark"/>
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{width: `80%`}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">{placeCardsData[3].name}</a>
                    </h2>
                    <p className="place-card__type">{placeCardsData[3].type}</p>
                  </div>
                </article>

                <article className="cities__place-card place-card">
                  <div className="cities__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src={placeCardsData[4].imgURL} width="260" height="200" alt="Place image"/>
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{placeCardsData[4].price}</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                      </div>
                      <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                          <use href="#icon-bookmark-active"/>
                        </svg>
                        <span className="visually-hidden">In bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{width: `80%`}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">{placeCardsData[4].name}</a>
                    </h2>
                    <p className="place-card__type">{placeCardsData[4].type}</p>
                  </div>
                </article>

              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  placeCardsData: PropTypes.arrayOf(PropTypes.shape({
    imgURL: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
  })),
};

export default Main;
