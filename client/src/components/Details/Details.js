import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBreeds, getBreed, getFavorites, favoriteBreed, unfavoriteBreed } from '../../actions/dogActions';

class Details extends Component {
    componentWillMount() {
        const breedId = this.props.match.params.id;
        this.props.getBreed(breedId);
        this.props.getBreeds();
        this.props.getFavorites();
    }
    render (){
        if (this.props.breed && this.props.favorites) {
            let isFavorite = this.props.favorites.find(favorite => favorite.breed.id === this.props.breed.id);
            if (isFavorite) {
                return(
                    <div className="container">
                        <h3 className="center">{this.props.breed.name}</h3>
                        <div className="row" key={this.props.breed.id}>
                            <div className="card large horizontal">
                                <div className="card-image col s5">
                                    <img className="responsive-img" src={this.props.breed.image} alt={"Image of " + this.props.breed.name}></img>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p><b>{this.props.breed.country}</b></p>
                                    </div>
                                    <div className="card-content">
                                        <p>{this.props.breed.description}</p>
                                    </div>
                                    <div className="card-action">
                                        <span className="waves-effect waves-light btn red" onClick={()=>{this.props.unfavoriteBreed(isFavorite.id)}}>Unfavorite</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                )
            }
            else {
                return(
                    <div className="container">
                        <h3 className="center">{this.props.breed.name}</h3>
                        <div className="row" key={this.props.breed.id}>
                            <div className="card large horizontal">
                                <div className="card-image col s5">
                                    <img className="responsive-img" src={this.props.breed.image} alt={"Image of " + this.props.breed.name}></img>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p><b>{this.props.breed.country}</b></p>
                                    </div>
                                    <div className="card-content">
                                        <p>{this.props.breed.description}</p>
                                    </div>
                                    <div className="card-action">
                                        <span className="waves-effect waves-light btn" onClick={()=>{this.props.favoriteBreed(this.props.breed.id)}}>Favorite</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                )
            }
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        breed: state.breed,
        favorites: state.favorites,
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBreeds: (id) => { dispatch(getBreeds()) },
        getBreed: (id) => { dispatch(getBreed(id)) },
        getFavorites: () => { dispatch(getFavorites())},
        favoriteBreed: (id) => { dispatch(favoriteBreed(id)) },
        unfavoriteBreed: (id) => {dispatch(unfavoriteBreed(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);