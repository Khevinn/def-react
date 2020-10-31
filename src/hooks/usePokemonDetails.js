import { useState, useEffect, useMemo } from 'react'
import api from '../helpers/api'

const usePokemonDetails = ( nameOrId ) => {
  const [ details, setDetails ] = useState( null )
  const [ loading, setLoading ] = useState( true )
  const [ error, setError ] = useState( null )

  useEffect( () => {
    setLoading( true )
    api.get( `pokemon/${nameOrId}` )
      .then( response => setDetails( response.data ) )
      .catch( setError )
      .finally( () => setLoading( false ) )
  }, [ nameOrId ] )

  return useMemo( () => ( { details, loading, error } ), [ details, loading, error ] )
}

export default usePokemonDetails
