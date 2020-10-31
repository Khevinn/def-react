import { useEffect, useState } from 'react'

const Home = () => {
  const [ count, setCount ] = useState( 0 )

  useEffect( () => {}, [] )

  return (
    <h1>
      Hello World. I'am home.
      <br />
      <span onClick={ () => setCount( count + 1 ) }>Click here, {count}</span>
    </h1>
  )
}

export default Home
