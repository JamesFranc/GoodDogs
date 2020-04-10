import { GET_BREEDS, GET_BREED, GET_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from './action-types/dog-actions'
import axios from 'axios';

export const getBreeds = () => {
    //On successful axios call get all breeds
        return dispatch => {
        axios
            .get('/breeds')
            .then(res => {
                dispatch({
                    type: GET_BREEDS,
                    breeds: res.data
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
            .get('/breeds/' + id)
            .then(res => {
                dispatch({
                    type: GET_BREED,
                    breed: res.data
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
                    favorites: [...res.data]
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
            .post('/favorites/add', { breed_id: id })
            .then(res => {
                dispatch({
                    type: ADD_FAVORITE,
                    id: id
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
            .delete('/favorites/' + id)
            .then(res => {
                dispatch({
                    type: REMOVE_FAVORITE,
                    id: id
                }) 
            })
            .catch(err => {
                console.log(err.message)
            })
    }
} 
