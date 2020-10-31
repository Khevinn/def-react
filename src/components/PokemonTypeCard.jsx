import { useMemo } from 'react'
import PropTypes from 'prop-types'
import * as TypeIcon from './TypeIcon'
import usePokemonTypeColor from '../hooks/usePokemonTypeColor'
import styled from 'styled-components'

const PokemonTypeCard = ( { type, ...props } ) => {
  const name = useMemo(
    () => Object.keys( TypeIcon ).find( key => key.toLowerCase() === type ),
    [ type ]
  )
  const Icon = useMemo( () => TypeIcon[name], [ name ] )
  const color = usePokemonTypeColor( type )

  return (
    <Container color={color}>
      <Circle {...props} color={color}>
        <Icon style={ { maxWidth: '100%', height: 'auto' } }></Icon>
      </Circle>
      <h2>{name}</h2>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color}40;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 ${props => props.color};
  margin: 10px 0;
  padding: 30px;
  cursor: pointer;
`

const Circle = styled.div`
  background-color: ${ props => props.color };
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 100%;
`

PokemonTypeCard.propTypes = {
  type: PropTypes.string.isRequired,
}

export default PokemonTypeCard
