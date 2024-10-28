import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import tvReducer from './tvReducer';
import onAirReducer from './onAirReducer';
import topRatedReducer from './topRatedReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  tv:tvReducer,
  onAir:onAirReducer,
  topRated: topRatedReducer,
  search:searchReducer

});

export type RootState = ReturnType<typeof rootReducer>; 
export default rootReducer;
