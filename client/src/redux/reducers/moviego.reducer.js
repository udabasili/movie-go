import {
  PUSH_TO_MODAL,
  FETCH_EBAY_ERROR,
  FETCH_EBAY_SUCCESS,
  FETCH_EBAY_PENDING,
} from '../action-types/moviego.action-types';

const initialState = {
  pending: false,
  ebayCarts: [],
  error: null,
  showModal: false,
  youtubeVideo: '',
};

export default function moviegoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EBAY_PENDING:
      return {
        ...state,
        pending: true,
        showModal: false,
      };
    case FETCH_EBAY_SUCCESS:
      return {
        ...state,
        pending: false,
        ebayCarts: action.payload.ebayCart,
        youtubeVideo: action.payload.youtubeVideo,
        showModal: true,
      };
    case FETCH_EBAY_ERROR:
      return {
        ...state,
        pending: false,
        showModal: false,
        error: action.error,
      };
    case PUSH_TO_MODAL:
      return {
        ...state,
        pending: false,
        showModal: false,
        youtubeVideo: '',

      };
    default:
      return state;
  }
}
