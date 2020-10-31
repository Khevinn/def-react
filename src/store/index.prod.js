import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import initialState from './initialState'

const store = createStore( reducer, initialState, applyMiddleware() )

export default store
