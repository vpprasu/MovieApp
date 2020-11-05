import React, {useState} from 'react'
import {useSelector} from "react-redux";
import config from "../../config.json";
import axios from "../../helper/axios";
import moment from "moment";
export default function MovieList({isMovieDetailsPage,handleMovieDetailsPage}) {
    const movieList = useSelector(state => state.movieList);
    const [movieDetails,setMovieDetails] = useState(null);
    let movieListInfo = [];
    async function handleMovieClick(movieId){
        const movieDetailsResponse = await axios.get(`movie/${movieId}?api_key=${config.apiKey}`);
        setMovieDetails(movieDetailsResponse.data);
        handleMovieDetailsPage(true);
    }
    if(movieList.results){
        movieList.results.map((obj) => {
            movieListInfo.push(<div key={obj.id} className="col-lg-3 movie-list" onClick={() => handleMovieClick(obj.id)}>
                <img src={`${config.imageBasePath}${obj.poster_path}`} className="rounded-circle"   height="180" />
                <p className="title">{obj.title}</p>
                <p className="year">{`(${moment(obj.release_date).format("YYYY")})`}</p>
        </div>)
        })
    }
    let movieDetailsInfo = [];
    if(movieDetails){
        movieDetailsInfo.push(
                <div className="container" key={movieDetails.id}>
                    <div className="row">
                        <div className="col-lg-5 left-side">
                        <img src={`${config.imageBasePath}${movieDetails.poster_path}`}  width="300" />
                        </div>
                        <div className="col-lg-7 right-side">
                            <h6><p className="title">{`${movieDetails.title} (${moment(movieDetails.release_date).format("YYYY")})`}</p></h6>
                            <p>{`List of movie genres (${movieDetails.genres.map(obj => obj.name).join(",")})`}</p>
                            <p style={{textDecoration:"underline"}}>Movie Overview Paragraph</p>
                            <p>{movieDetails.overview}</p>
                            <p style={{textDecoration:"underline"}}>List of production companies names only</p>
                            <p><ul>{movieDetails.production_companies.map(obj => (<li>{obj.name}</li>))}</ul></p>
                        </div>
                    </div>
                </div>
            )
    }
    return (
        <>
           {isMovieDetailsPage ? movieDetailsInfo : movieListInfo}
            </>
    )
}
