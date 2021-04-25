import axios from 'axios'

const fetchPostsSuccess = body => ({
    type: 'FETCH_POSTS_SUCCESS',
    payload: { body }
})

export const fetchPosts = () => {
    return async dispatch => {
        try {
            let item = await axios.get('http://localhost:3000/dev/get_item')
            let itemlist = {
                items : item.data,
                addedItems: [],
                total: 0
            }
            dispatch(fetchPostsSuccess(itemlist)) //store first five posts
        }
        catch(e){
            console.log(e)
        }
    }
}