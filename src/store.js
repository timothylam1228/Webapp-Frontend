import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import cartReducer from './components/reducers/cartReducer'

//code to setup redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(cartReducer, composeEnhancers(
    applyMiddleware(thunk)
));
console.log('store',store.getState())

export default store