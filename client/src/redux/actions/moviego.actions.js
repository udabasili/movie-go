import {
  PUSH_TO_MODAL, FETCH_EBAY_ERROR, FETCH_EBAY_SUCCESS, FETCH_EBAY_PENDING,
} from '../action-types/moviego.action-types';

export const pushToModal = (movieId) => ({
  type: PUSH_TO_MODAL,
  payload: movieId,
});

export const fetchProductsPending = () => ({
  type: FETCH_EBAY_PENDING,
});

export const fetchEbaySuccess = (ebayCart, youtubeVideo) => ({
  type: FETCH_EBAY_SUCCESS,
  payload: { ebayCart, youtubeVideo },
});

export const fetchEbayError = (error) => ({

  type: FETCH_EBAY_ERROR,
  error,

});
