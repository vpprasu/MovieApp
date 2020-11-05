import axios from "../helper/axios";
import config from "../config.json";
export const getMovieList = (genresId) => async dispatch => {
   const getMovieList = await axios.get(`discover/movie?api_key=${config.apiKey}&with_genres=${genresId}`);
   dispatch({
       type : 'GET_MOVIE_DATA',
       payload : getMovieList.data
   })
}