import Item1 from '../../assets/items/images/item1.png'
import Item2 from '../../assets/items/images/item2.png'
import Item3 from '../../assets/items/images/item3.png'
import Item4 from '../../assets/items/images/item4.png'
import Item5 from '../../assets/items/images/item5.png'
import Item6 from '../../assets/items/images/item6.png'
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from '../actions/action-types/cart-actions'

const initState = {
    items: [
        { id: 1, title: 'Money 7', desc: "Animal", price: 110, img: Item1 },
        { id: 2, title: 'Money 7', desc: "Animal2", price: 80, img: Item2 },
        { id: 3, title: 'Money 7', desc: "Animal3", price: 120, img: Item3 },
        { id: 4, title: 'Money 7', desc: "Animal4", price: 260, img: Item4 },
        { id: 5, title: 'Money 7', desc: "Animal5", price: 160, img: Item5 },
        { id: 6, title: 'Money 7', desc: "Animal6", price: 90, img: Item6 }
    ],
    addedItems: [],
    total: 0
}
const cartReducer = (state = initState, action) => {

    console.log(action.type);

    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
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
            console.log("newTotal",addedItem);
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal,
            }
        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

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
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
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
export default cartReducer;