import React, {useState} from 'react'
import Header from "../../components/Movie/header.js";
import Footer from "../../components/Movie/footer.js";
import MovieFilter from "../../components/Movie/movieFilter.js";
import MovieList from "../../components/Movie/movieList.js";
export default function Index() {
    const [isMovieDetailsPage, setMovieDetailsPage] = useState(false);
    function handleMovieDetailsPage(pageMode){
        setMovieDetailsPage(pageMode);
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <Header></Header>
                <MovieFilter handleMovieDetailsPage={handleMovieDetailsPage} isMovieDetailsPage= {isMovieDetailsPage}></MovieFilter>
                <MovieList handleMovieDetailsPage= {handleMovieDetailsPage} isMovieDetailsPage= {isMovieDetailsPage}></MovieList>
                <Footer></Footer>
            </div>
        </div>
    )
}
