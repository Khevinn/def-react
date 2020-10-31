import { create, act } from 'react-test-renderer'
import Row from '../components/Row'
import Col from '../components/Col'

describe( 'row match props', () => {
  it( 'compare snapshot', () => {
    let reactTestInstace
    act( () => {
      reactTestInstace = create(
        <Row margin={10} padding={20}>
          <Col margin={15}>
            <h1>Hello World</h1>
          </Col>
          <Col margin={20}>
            <h1>I'am column</h1>
          </Col>
        </Row>
      )
    } )

    const omitedProps = ( () => {
      const { children, ...rest } = reactTestInstace.root.props
      return rest
    } )()

    expect( omitedProps ).toEqual( { margin: 10, padding: 20 } )

    expect( reactTestInstace.root.type ).toBe( Row )

    expect( reactTestInstace.root.parent ).toBeNull()

    reactTestInstace.root.findAllByProps( { className: 'col' } )

    reactTestInstace.root.findAllByType( 'div' )

    reactTestInstace.root.findAllByType( Col ).forEach( ( child ) => {
      expect( child.type ).toBe( Col )
      expect( child.parent.type ).toBe( 'div' )
      expect( child.parent.parent ).toBe( reactTestInstace.root )
      expect( child.parent.parent.type ).toBe( Row )
      expect( child.parent.parent.parent ).toBeNull()
    } )

    reactTestInstace.root.findByProps( { margin: 15 } )

    const findByPropMargin20 = reactTestInstace.root.findByProps( { margin: 20 } )

    expect( findByPropMargin20 ).toBeDefined()

    expect( findByPropMargin20.type ).toBe( Col )

    expect( reactTestInstace.toJSON() ).toMatchSnapshot()

    expect( reactTestInstace.toTree() ).toMatchSnapshot( 'tree' )

    act( () => {
      reactTestInstace.update(
        <Row padding={40}>
          <Col margin={15}>
            <h1>Hello World</h1>
          </Col>
          <Col>
            <h1>I'am column</h1>
          </Col>
          <Col padding={15}>
            <h1>I'am last column</h1>
          </Col>
        </Row>
      )
    } )

    expect( reactTestInstace.root.props.padding ).toEqual( 40 )

    expect( reactTestInstace.root.children[0].children.length ).toBe( 3 )

    expect( reactTestInstace.toJSON() ).toMatchSnapshot()

    expect( reactTestInstace.toTree() ).toMatchSnapshot( 'tree' )
  } )
} )
