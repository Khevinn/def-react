import { useSelector } from 'react-redux'

const useDonePokemonLoad = () => {
  return useSelector( state => state.pokemons.end )
}

export default useDonePokemonLoad
