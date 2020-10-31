import { useContext } from 'react'
import { Context } from '../components/PokemonContext'

const useContextualizedPokemon = () => useContext( Context )

export default useContextualizedPokemon
