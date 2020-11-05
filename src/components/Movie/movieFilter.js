import React,{useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import axios from "../../helper/axios.js";
import config from "../../config.json";
import {getMovieList} from "../../actions/movie.js"
export default function MovieFilter({isMovieDetailsPage,handleMovieDetailsPage}) {
    const [filter, setfilter] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        const getMovieFilters = async () => {
            const movieFilterResponse = await axios.get(`genre/movie/list?api_key=${config.apiKey}`);
            setfilter(movieFilterResponse.data.genres)
        }
        getMovieFilters();
    }, [])
    
    return (
            <div className="col-lg-12 movie-filter">
                {isMovieDetailsPage ? <button type="button" className="btn btn-link" onClick={() => { handleMovieDetailsPage(false);}}>Back to List...</button> : (
                    <select onChange={(e) => dispatch(getMovieList(e.target.value))}>
                        <option value="">Movie Genres filter</option>
                        {
                            filter &&  filter.map((obj) => (<option value={obj.id} key={obj.id}>{obj.name}</option>))
                        }
                    </select>)}
            </div>
    )
}
