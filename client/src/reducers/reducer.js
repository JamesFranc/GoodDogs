import { GET_BREEDS, GET_BREED, GET_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/action-types/dog-actions'

const initState = {
    breeds: [],
    favorites: [],
    breed: undefined
}

const reducer = (state = initState, action) => {
    if (action.type === GET_BREEDS) {
        
        action.breeds.forEach(breed => {
            breed.image = breed.images[Math.floor(Math.random() * breed.images.length)]; 
        })
        return {
            ...state,
            breeds: [...action.breeds]
        }
    }
    if (action.type === GET_FAVORITES) {
        action.favorites.forEach(favorite => {
            favorite.breed.image = favorite.breed.images[Math.floor(Math.random() * favorite.breed.images.length)]; 
        })
        return {
            ...state,
            favorites: [...action.favorites]
        }
    }
    if (action.type === GET_BREED) {
        action.breed.image = action.breed.images[Math.floor(Math.random() * action.breed.images.length)]; 
        return {
            ...state,
            breed: action.breed
        }
    }
    if (action.type === ADD_FAVORITE) {
        const newFavorite = state.breeds.find(breed => breed.id === action.id);
        return {
            ...state,
            breed: state.breed,
            favorites: [...state.favorites, {breed:newFavorite, id:action.id}]
        }
    }
    if (action.type === REMOVE_FAVORITE) {
        const filteredFavorites = state.favorites.filter(favorite => favorite.id !== action.id);
        return {
            ...state,
            breed: state.breed,
            favorites: filteredFavorites
        }
    }
        
    return state;
}

export default reducer;