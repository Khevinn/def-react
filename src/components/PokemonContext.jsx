import { createContext } from 'react'
import { object } from 'prop-types'

const PokemonProvider = ( { pokemon, children } ) => (
  <Context.Provider value={pokemon}>
    {children}
  </Context.Provider>
)

PokemonProvider.propTypes = {
  pokemon: object.isRequired
}

export const Context = createContext()

export default PokemonProvider
