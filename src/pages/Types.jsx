import Col from '../components/Col'
import PokemonTypeCard from '../components/PokemonTypeCard'
import Row from '../components/Row'
import usePokemonsTypes from '../hooks/usePokemonsTypes'

const Types = () => {
  const types = usePokemonsTypes()

  return (
    <Row>
      {types.map( type => (
        <Col lg={2} md={3} sm={6} size={12}>
          <PokemonTypeCard type={type} />
        </Col>
      ) )}
    </Row>
  )
}

export default Types
