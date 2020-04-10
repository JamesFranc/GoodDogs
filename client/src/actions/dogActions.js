import { GET_BREEDS, GET_BREED, GET_FAVORITES, GET_FAVORITE, FAVORITE, UNFAVORITE } from './action-types/dog-actions'
import axios from 'axios';

export const getBreed = () => {
    //On successful axios call get all breeds
        return dispatch => {
        axios
            .get('/breeds')
            .then(res => {
                dispatch({
                    type: GET_BREEDS,
                    breeds: res
                }) 
            })
            .catch(err => {
                console.log(err.message)
            })
        }
}

export const getBreed = (id) => {
    //Get a specific breed
        return dispatch => {
        axios
            .get('/breed/',{
                params: {
                    id: id
                }
            })
            .then(res => {
                dispatch({
                    type: GET_BREED,
                    breed: res
                }) 
            })
            .catch(err => {
                console.log(err.message)
            })
        }
}

export const getFavorites = () => {
    // Get all favorites
    return dispatch => {
        axios
            .get('/favorites')
            .then(res => {
                dispatch({
                    type: GET_FAVORITES,
                    favorites: res
                }) 
            })
            .catch(err => {
                console.log(err.message)
            })
        }
}

export const getFavoriteById = (id) => {
    // Get favorite breed by id
    return dispatch => {
        axios
            .put('/favorites', {
                params: {
                    id: id
                }
            })
            .then(res => {
                dispatch({
                    type: GET_FAVORITE,
                    id: res.id,
                    breed: res.breed
                }) 
            })
            .catch(err => {
                console.log(err.message)
            })
        }
}

export const favoriteBreed = (id) => {
    // Favorite a specific breed
    return dispatch => {
        axios
            .post('/favorites/', {
                params: {
                    id: id
                }
            })
            .then(res => {
                dispatch({
                    type: FAVORITE,
                    id: res.id,
                    breed: res.breed
                }) 
            })
            .catch(err => {
                console.log(err.message)
            })
        }
}

export const unfavoriteBreed = (id) => {
    //Remove a favorite breed
    return dispatch => {
        axios
            .delete('/favorites', {
                params: {
                    id: id
                }
            })
            .then(res => {
                dispatch({
                    type: FAVORITE,
                    id: id
                }) 
            })
            .catch(err => {
                console.log(err.message)
            })
    }
} 
