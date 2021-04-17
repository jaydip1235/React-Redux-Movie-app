export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";

//action creators
export function addMovies(movies){
    return {
        type : ADD_MOVIES,
        movies
    }
}

export function addFavourtie(movie){
    return {
        type : ADD_TO_FAVOURITES,
        movie
    }
}

export function removeFromFavourties(movie){
    return {
        type : REMOVE_FROM_FAVOURITES,
        movie
    }
}
export function setShowFavourties(val){
    return {
        type : SET_SHOW_FAVOURITES,
        val
    }
}

export function handleMovieSearch(movie){
    const url = `http://www.omdbapi.com/?t=${movie}&apikey=675c4427`

    return function (dispatch){
        fetch(url)
        .then(response=>response.json())
        .then(movie=>{
            
            //dispatch an action
            dispatch(addMovieSearchResult(movie))
        })
    }
}
export function addMovieSearchResult(movie){
    return {
        type: ADD_SEARCH_RESULT ,
         movie
        };
}
export function addMovieToList(movie) {
    return {
      type: ADD_MOVIE_TO_LIST,
      movie,
    };
  }