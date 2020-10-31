import Col from '../../components/Col'
import Row from '../../components/Row'
import useContextualizedPokemon from '../../hooks/useContextualizedPokemon'

const Body = () => {
  const pokemon = useContextualizedPokemon()

  return (
    <Row>
      <Col>
        <h3>Sprites</h3>
        <table>
          <thead>
            <tr>
              <th>Front</th>
              <th>Back</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={pokemon.sprites.front_default} alt='' />
              </td>
              <td>
                <img src={pokemon.sprites.back_default} alt='' />
              </td>
            </tr>
            <tr>
              <td>
                <img src={pokemon.sprites.front_shiny} alt='' />
              </td>
              <td>
                <img src={pokemon.sprites.back_shiny} alt='' />
              </td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
  )
}

export default Body
