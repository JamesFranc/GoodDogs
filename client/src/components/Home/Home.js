import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import { getBreeds, getBreed, getFavorites, getFavoriteById, favoriteBreed, unfavoriteBreed } from '../../actions/dogActions';
class Home extends Component {
    componentDidMount() {
        this.props.getBreeds();
        this.props.getFavorites();
    }
    render (){
        let breedList = this.props.breeds.map(breed => {
            let favoriteBreeds = this.props.favorites.find((favorite) => {
                return favorite.id === breed.id
            });

            let randomImageIndex = Math.floor(Math.random() * breed.images.length); 
                return(
                    <div className="col s12" key={breed.id}>
                        <div className="card small horizontal hoverable">
                            <div className="card-image">
                                <img className="responsive-img" src={breed.images[randomImageIndex]} alt={"Image of " + breed.name}></img>
                            </div>
                            
                            <div className="card-content col s8">
                                <h3 className="truncate center">{breed.name}</h3>
                            </div>
                        </div>
                     </div>
                )
            }) 
        return(
            <div className="container">
                <h3 className="center">Good Dogs</h3>
                    <div className="row center-cols center-align">
                        { breedList }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);