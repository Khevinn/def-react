import { useMemo } from 'react'

const useStyleProp = ( { style, margin, padding, ...rest } ) => {
  const posStyle = useMemo( () => ( {
    margin,
    padding,
    ...style,
  } ), [ margin, padding, style ] )


  return useMemo( () => ( { ...rest, style: posStyle } ), [ rest, posStyle ] )
}

export default useStyleProp