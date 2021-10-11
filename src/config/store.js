import {applyMiddleware, createStore} from 'redux'
import rootReducer from '../redux/reducers/rootReducer'
import thunk from 'redux-thunk'

 const store = createStore(rootReducer,applyMiddleware(thunk));
 console.log('data in store');
 export default store;