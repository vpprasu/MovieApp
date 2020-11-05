const initialState = {
    movieList : {}
}

const rootReducers = (state = initialState, action) => {
    switch(action.type){
        case "GET_MOVIE_DATA":
            return { movieList: action.payload};
        default:
            return state;
    }
}

export default rootReducers;