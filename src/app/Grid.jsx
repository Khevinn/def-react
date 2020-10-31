import Row from "../components/Row"
import Col from "../components/Col"
import { NavLink } from "react-router-dom"
import styled from 'styled-components'

const Grid = ( { children } ) => {
  return (
    <Row className={'h-100'}>
      <Col size={2} className={'h-100'}>
        <Nav>
          <List>
            <ListItem>
              <NavLink to='/home'>Home</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='/pokemons'>Pokémons</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='/types'>Tipos</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='/items'>Itens</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='/berries'>Frutas</NavLink>
            </ListItem>
          </List>
        </Nav>
      </Col>
      <Col className={'h-100'} style={ { overflowY: 'scroll' } }>
        {children}
      </Col>
    </Row>
  )
}

const Nav = styled.nav`
  background-color: ${ props => props.theme.colors.neutral };
  height: 100%;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const ListItem = styled.li`
  /* background-color: #FFFFFF90; */
  padding: 10px 15px;
  a {
    text-decoration: none;
    font-size: 20px;
    color: ${ props => props.theme.colors.primary };
    &.active {
      color: ${ props => props.theme.colors.options[1] }
    }
  }
`

export default Grid
