import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import App from '../app'
import store from '../store'

import '../services';

describe( 'test suit application', () => {
  it( 'test app render', async () => {
    render( <App /> )
    screen.debug()

    fireEvent.click( screen.getByText( 'Pokémons' ) )
    await new Promise( resolve => {
      const interval = setInterval( () => {
        if ( store.getState().pokemons.end ) {
          resolve()
          clearInterval( interval )
        }
      }, 400 )
    } )
    screen.debug()

    const listContainer = screen.getByText( 'charmander' ).parentElement.parentElement
    expect( listContainer.children.length ).toBe( 10 )

    fireEvent.change(
      screen.getByPlaceholderText( 'Inserir nome do pokémon...' ),
      { target: { value: 'cha' } }
    )
    screen.debug()

    fireEvent.click( screen.getByText( 'charmander' ) )
    screen.debug()
  }, 5000 * 10 )
} )