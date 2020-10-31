import { useMemo } from 'react'
import { useSelector } from 'react-redux'

const usePokemonsQty = ( search = '' ) => {
  const regexp = useMemo( () => RegExp( search ), [ search ] )
  return useSelector(
    state => state.pokemons.list.filter(
      pokemon => regexp.test( pokemon.name )
    ).length
  )
}

export default usePokemonsQty
