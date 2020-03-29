import React from 'react';
import MovieCards from '../cards/cards.component';
import './card-list.styles.css';

const CardList = ({ movies }) => (
  <div className="movie-card-container">
    { 
      movies.map((data, i) => (
        <MovieCards
          key={data.id}
          name={data.title}
          plot={data.overview}
          image={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          rating={data.vote_average}
          date={data.release_date.split('-')[0]}
          genre={data.genre_ids}
          />
        ))
    }
  </div>
);


export default CardList;
