import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,GET_ITEM,FETCH_POSTS_SUCCESS} from '../actions/action-types/cart-actions'
import axios from 'axios'

export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
export const getItems=(id)=>{
    return{
        type: GET_ITEM,
        id
    }
}
// const fetchPostsSuccess = items => ({
//     type: FETCH_POSTS_SUCCESS,
//     payload: { items }
// })

// export const fetchPosts =  () => {
//     return async dispatch => {
//         try {
//             let item = await axios.get('http://localhost:3000/dev/get_item')
//             item.data.addedItems = [];
//             item.data.total =  0;
//             let itemlist = {
//                 items : item.data,
//                 addedItems: [],
//                 total: 0
//             }
//             console.log('post.data',itemlist)
//             dispatch(fetchPostsSuccess(itemlist)) //store first five posts
//         }
//         catch(e){
//             console.log(e)
//         }
//     }
// }