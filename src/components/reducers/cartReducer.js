import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, GET_ITEM, FETCH_POSTS_SUCCESS } from '../actions/action-types/cart-actions'


const axios = require('axios').default;

const initState2 = {
    items: [
    ],
    addedItems: [],
    total: 0
}

const cartReducer = (state = [], action) => {
    console.log('state', state);
    if (action.type === FETCH_POSTS_SUCCESS) {
        return action.payload.body
    }
    if (action.type === ADD_TO_CART) {
        console.log('load state', state.body);
        let addedItem = state.items.body.find(item => item._id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item._id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price
            console.log("newTotal", addedItem);
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal,
            }
        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item._id)
        let new_items = state.addedItems.filter(item => action.id !== item._id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        console.log('state', state);
        let addedItem = state.items.body.find(item => item._id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        console.log('action', action.id)
        let addedItem = state.items.body.find(item => item._id === action.id)

        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item._id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }

    }
    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 6
        }
    }

    else {

        return state
    }

}
