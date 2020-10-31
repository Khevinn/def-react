import Col from '../../components/Col'
import PokemonProvider from '../../components/PokemonContext'
import Row from '../../components/Row'
import usePokemon from '../../hooks/usePokemon'
import usePokemonDetails from '../../hooks/usePokemonDetails'
import Body from './Body'

const Pokemon = ( {
  match: { params }
} ) => {
  const pokemon = usePokemon( params.pokemon )
  const { details, loading } = usePokemonDetails( params.pokemon )
  return (
    <Row>
      <Col margin={'10px 0'}>
        <h1 style={ { textTransform: 'capitalize' } }>{pokemon.name}</h1>
        { loading && <h5>Carregando...</h5> }
        { !loading && (
          <PokemonProvider pokemon={details}>
            <Body></Body>
          </PokemonProvider>
        ) }
      </Col>
    </Row>
  )
}

export default Pokemon
