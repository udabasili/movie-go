import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import moviegoReducer from './reducers/moviego.reducer';


const persistConfig = {
  key: 'root', 
  storage,
  whitelist: ['cart'], 
};

const rootReducer = combineReducers({
  ebay: moviegoReducer,
});

export default persistReducer(persistConfig, rootReducer);
