import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {useReducer} from './redux/UserReduucer'





const reducers = combineReducers ({
   user: useReducer
})









const middleware = [thunk]
export const store =  createStore(reducers,composeWithDevTools(applyMiddleware(...middleware)))