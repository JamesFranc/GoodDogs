import { GET_BREEDS, GET_BREED, GET_FAVORITES, GET_FAVORITE, FAVORITE, UNFAVORITE } from '../actions/action-types/dog-actions'
import { bindActionCreators } from 'redux';

const initState = {
    breeds: [],
    favorites: []
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
    // if (action.type === ADD_ITEM) {
    //     let addedItem = state.items.find(item => item.item_id === action.id);
    //     let itemInCart = state.itemsInCart.find(item => action.id === item.item_id);
    //     if (itemInCart) {
    //         state.itemsInCart.forEach(item => {
    //             if (item.item_id === itemInCart.item_id) {
    //                 item.quantity +=1;
    //             }
    //         })
    //         return {
    //             ...state,
    //             itemsInCart: [...state.itemsInCart],
    //             total: (+state.total + +addedItem.price).toFixed(2)
    //         }
    //     } 
    //     else {
    //         addedItem.quantity = 1;
    //         let newTotal = (+state.total + addedItem.price).toFixed(2);

    //         return {
    //             ...state,
    //             itemsInCart: [...state.itemsInCart, addedItem],
    //             total: (+newTotal).toFixed(2)
    //         }
    //     }
    // }
    // if (action.type === REMOVE_ITEM) {
    //     let itemToRemove = state.itemsInCart.find(item => action.id === item.item_id)
    //     let newItems = state.itemsInCart.filter(item => action.id !== item.item_id)
    //     let newTotal = (+state.total - (itemToRemove.price * itemToRemove.quantity)).toFixed(2);

    //     return {
    //         ...state,
    //         itemsInCart: newItems,
    //         total: (+newTotal).toFixed(2)
    //     }
    // }
    // if (action.type === SUB_QUANTITY) {  
    //     let reducedItem = state.itemsInCart.find(item => item.item_id === action.id);
    //     if (reducedItem.quantity === 1) {
    //         let newItems = state.itemsInCart.filter(item => item.item_id !== action.id)
    //         let newTotal = (+state.total - reducedItem.price).toFixed(2);
    //         return {
    //             ...state,
    //             itemsInCart: newItems,
    //             total: (+newTotal).toFixed(2)
    //         }
    //     }
    //     else {
    //         reducedItem.quantity -= 1
    //         let newTotal = (+state.total - reducedItem.price).toFixed(2);
    //         return {
    //             ...state,
    //             itemsInCart: [...state.itemsInCart],
    //             total: (+newTotal).toFixed(2)
    //         }
    //     }
    // }
        
    return state;
}

export default reducer;