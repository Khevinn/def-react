// import { combineReducers } from 'redux'
import {
  ADD_POKEMONS_IN_LIST,
  SET_POKEMONS_LIST_END,
  SET_POKEMONS_TYPES
} from '../constants/actions'
import initialState from '../store/initialState'

const reducer = ( state = initialState, action ) => {
  switch( action.type ) {
    case ADD_POKEMONS_IN_LIST:
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          list: [ ...state.pokemons.list, ...action.pokemons ]
        }
      }
    case SET_POKEMONS_LIST_END:
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          end: true
        }
      }
    case SET_POKEMONS_TYPES:
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          types: action.types
        }
      }
    default: return state
  }
}

export default reducer
