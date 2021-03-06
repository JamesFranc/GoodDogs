import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBreeds, getBreed, getFavorites, favoriteBreed, unfavoriteBreed } from '../../actions/dogActions';
// import './Favorites.css';
class Favorites extends Component {
    componentDidMount() {
        this.props.getFavorites();
    }
    render (){
        let favoriteList = this.props.favorites.map(favorite => {
                return(
                    <div className="col s6 m4" key={favorite.breed.id}>
                        <Link to={"/details/"+favorite.breed.id}>
                            <div className="card small hoverable">
                                <div className="card-image">
                                    <img className="responsive-img" src={favorite.breed.image} alt={"Image of " + favorite.breed.name}></img>
                                </div>
                                <div className="valign-wrapper col s8">
                                    <div className="card-content center col s12">
                                        <p className="truncate center">{favorite.breed.name}</p>
                                    </div>

                                </div>
                            </div>
                        </Link>
                     </div>
                )
            }) 
        return(
            <div className="container">
                <h3 className="center">Favorite Dogs</h3>
                    <div className="row center-cols center-align">
                        { favoriteList }
                    </div>
            </div>
        )   
    }
}

const mapStateToProps = (state) => {
    return {
        breeds: state.breeds,
        favorites: state.favorites,
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBreeds: () => { dispatch(getBreeds()) },
        getBreed: (id) => { dispatch(getBreed(id)) },
        getFavorites: () => { dispatch(getFavorites()) },
        favoriteBreed: (id) => { dispatch(favoriteBreed(id)) },
        unfavoriteBreed: (id) => {dispatch(unfavoriteBreed(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);