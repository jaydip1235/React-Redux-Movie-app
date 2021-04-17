import React from 'react'

 import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies,setShowFavourties} from '../actions'

class App extends React.Component {

  componentDidMount(){
    const {store} = this.props;
    store.subscribe(()=>{
      this.forceUpdate();
    })
    //make api call
    //dispatch an action 
    store.dispatch(addMovies(data))
    console.log('STATE',this.props.store.getState());
  }


  isMovieFavourite = (movie) =>{
    const {movies}=this.props.store.getState();
    const index = movies.favourites.indexOf(movie)

    if(index!==-1){
      return true
    }
    return false
  }

  onChangeTab = (val) =>{
    //alert('clicked')
    this.props.store.dispatch(setShowFavourties(val))
  }

  render(){
  const {movies,search}=this.props.store.getState();
  const {list,favourites,showFavourites} = movies
  const displayMovies = showFavourites? favourites : list
  console.log(favourites);
  return (
    <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites?'active-tabs':''}`} onClick={()=>this.onChangeTab(true)}>Favorites</div>
        </div>

        <div className="list">
            {
              displayMovies.map((movie,index) => (
                <MovieCard 
                movie={movie} 
                key={`movies-${index}`} 
                dispatch = {this.props.store.dispatch}
                isFavorite = {this.isMovieFavourite(movie)}/>
              ))
            }
        </div>
            {displayMovies.length===0 ?
            <div className="no-movies">No movies to display</div>:null}
        </div>
    </div>
  );
}
}

export default App;
