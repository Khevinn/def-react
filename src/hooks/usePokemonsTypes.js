import { useSelector } from 'react-redux'

const usePokemonsTypes = () => useSelector(
  state => state.pokemons.types.map( type => type.name )
)

export default usePokemonsTypes
