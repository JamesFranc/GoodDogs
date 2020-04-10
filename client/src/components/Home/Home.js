import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBreeds, getBreed, getFavorites, favoriteBreed, unfavoriteBreed } from '../../actions/dogActions';
import './Home.css';
class Home extends Component {
    componentDidMount() {
        this.props.getBreeds();
    }
    render (){
        let breedList = this.props.breeds.map(breed => {
                return(
                    <div className="col s12" key={breed.id}>
                        <Link to={"/details/"+breed.id}>
                            <div className="card small horizontal hoverable">
                                <div className="card-image">
                                    <img className="responsive-img" src={breed.image} alt={"Image of " + breed.name}></img>
                                </div>
                                <div className="valign-wrapper col s8">
                                    <div className="card-content col s12">
                                        <h3 className="truncate center">{breed.name}</h3>
                                    </div>

                                </div>
                            </div>
                        </Link>
                     </div>
                )
            }) 
        return(
            <div className="container">
                <h3 className="center">All Dogs</h3>
                <div className="row right-align">
                    <Link to="/favorites" className="waves-effect waves-light btn-large right-align">Favorites</Link>
                </div>
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