import { useSelector } from 'react-redux'

const usePokemon = ( nameOrId ) => {
  const pokemon = useSelector( state => {
    return state.pokemons.list
      .find( pokemon => pokemon.name === nameOrId || pokemon.id === nameOrId )
  } )

  return pokemon
}

export default usePokemon