import { useMemo, useCallback, useReducer } from 'react'
import Row from '../components/Row'
import Col from '../components/Col'
import PokemonListItem from '../components/PokemonListItem'
import styled from 'styled-components'
import Input from '../components/Input'
import usePokemons from '../hooks/usePokemons'
import useDonePokemonLoad from '../hooks/useDonePokemonLoad'
import usePokemonsQty from '../hooks/usePokemonsQty'
import LazyComponent from '../components/LazyComponent'

const initialState = {
  page: 1,
  search: '',
  qty: 10
}

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'SET_PAGE':
      return { ...state, page: action.page }
    case 'SET_SEARCH': 
      return { ...state, search: action.search }
    case 'SET_QTY': 
      return { ...state, qty: action.qty }
    case 'RESET_PAGE_AND_SET_SEARCH':
      return { ...state, page: 1, search: action.search }
    default: return state
  }
}

const Pokemons = () => {
  const [ state, dispatch ] = useReducer( reducer, initialState )
  const pokemons = usePokemons( state.page, state.qty, state.search )
  const done = useDonePokemonLoad()
  const pokemonsQty = usePokemonsQty( state.search )

  const pageQty = useMemo( () => Math.round( pokemonsQty / state.qty ), [ pokemonsQty, state.qty ] )

  const pages = useMemo( () => {
    if ( state.page <= 6 )
      return Array( pageQty ).fill( undefined )
        .map( ( v, index ) => index + 1 )
        .slice( 0, 11 )
    else
      return Array( pageQty ).fill( undefined )
        .map( ( v, index ) => index + 1 )
        .slice( state.page - 6, state.page + 5 )
  }, [ pageQty, state.page ] )

  const onChangeInput = useCallback( event => {
    dispatch( { type: 'RESET_PAGE_AND_SET_SEARCH', search: event.target.value } )
  }, [] )

  const createPageChangeCallback = useCallback( ( number ) => {
    return () => {
      dispatch( { type: 'SET_PAGE', page: number } )
    }
  }, [] )

  return (
    <Row margin={'10px 0'}>
      <Col>
        { !done && <h5>Carregando...</h5> }
        <LazyComponent></LazyComponent>
        <Input value={state.search} placeholder={'Inserir nome do pokémon...'} onChange={onChangeInput}/>
        <List>
          { pokemons.map( pokemon => (
            <PokemonListItem key={pokemon.name} pokemon={pokemon}/>
          ) ) }
        </List>
        <ContainerPagesNumber>
          {pages.map( number => (
            <div key={number}
              className={ number === state.page ? 'active' : undefined }
              onClick={createPageChangeCallback( number )}>
              {number}
            </div>
          ) )}
        </ContainerPagesNumber>
      </Col>
    </Row>
  )
}

const ContainerPagesNumber = styled( Row )`
  align-items: center;
  justify-content: center;
  & > div {
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    width: 44px;
    text-align: center;
    cursor: pointer;
    &.active {
      background-color: ${ props => props.theme.colors.primary };
      color: white;
    }
  }
`

const List = styled.ul`
  list-style: none;
  margin: 10px 0;
  padding: 0;
  border: 1px solid ${props => props.theme.colors.neutral}40;
  border-radius: 5px;
`

export default Pokemons
