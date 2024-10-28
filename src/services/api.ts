import axios from 'axios';
import { POPULAR_MOVIE, POPULAR_TV,ON_THE_AIR_TV, 
  TOP_RATED, BASE_URL, ACCESS_TOKEN} from './urls';



const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ACCESS_TOKEN}` 
  }
});

// API call functions
export const fetchPopularMovies = () => {
  return api.get(POPULAR_MOVIE);
};

export const fetchPopularTV = () => {
  return api.get(POPULAR_TV);
};

export const fetchOnTheAirTV = () => {
  return api.get(ON_THE_AIR_TV);
};


export const fetchTopRatedTV = () => {
  return api.get(TOP_RATED);
};

