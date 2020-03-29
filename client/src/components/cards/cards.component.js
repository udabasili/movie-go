import React from 'react';
import './cards.styles.css';
import { connect } from 'react-redux';
import fetchProductsAction from '../../redux/utils/ebay.utils';


const MovieCards = (props) => {
  const {name, rating, image, date, fetchProducts} = props;
  return (
    <div className="movie-card">
      <div className="movie-card-image-container">
        <img
          alt={name}
          className="movie-card-image"
          src={`${image}`}/>
      </div>
      <div className="movie-card-details">
        <h1 className="movie-card-title">
          <span className="movie-name">{name}</span>
          <span className="movie-year">
            {date}
          </span>
        </h1>
        <h2 className="movie-card-rating">
          IMDB: {rating}
        </h2>
      </div>
      <p
        onClick={() => fetchProducts(name)}
        className="trailer-button"
      >
				Watch Trailer
      </p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (name) => dispatch(fetchProductsAction(name)),
});

export default connect(null, mapDispatchToProps)(MovieCards);
