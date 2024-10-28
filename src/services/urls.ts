

export const BASE_URL = 'https://api.themoviedb.org/3/';
export const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500'; 
export const MOVIE_VIDEO_URL='https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4';
const API_KEY = 'b5ab2aab58eec26b4aec953765a40443'; 
export const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWFiMmFhYjU4ZWVjMjZiNGFlYzk1Mzc2NWE0MDQ0MyIsIm5iZiI6MTcyOTgzODMyMC4xMzAwNTcsInN1YiI6IjY3MThhNGNiYzc4MDJjYzUwMzU5YTAyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EBIzaWfqOn02TfDSQO_JOck7Y4Wpl-DzTrtFl-GqgBM'; 


export const SEARCH_MOVIE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;


export const POPULAR_MOVIE = BASE_URL+'movie/popular?api_key='+API_KEY;
export const POPULAR_TV = BASE_URL + 'tv/popular?api_key='+API_KEY;
export const TOP_RATED = BASE_URL + 'tv/top_rated?api_key='+API_KEY;
export const ON_THE_AIR_TV = BASE_URL + 'tv/on_the_air?api_key='+API_KEY;

