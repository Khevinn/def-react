import { useSelector } from 'react-redux'

const usePokemons = ( page, limit = 50, search = '' ) => {
  const pokemons = useSelector(
    state => {
      const start = ( page - 1 ) * limit
      const end = start + limit
      const regexpSearch = RegExp( search )
      return state.pokemons.list
        .filter( pokemon => regexpSearch.test( pokemon.name ) )
        .slice( start, end )
    }
  )

  return pokemons
}

export default usePokemons
