import { useMemo } from 'react'
import useClassNames from "../hooks/useClassNames"
import useStyleProp from "../hooks/useStyleProp"

const Col = ( {
  className: classNameProp,
  size, sm, md, lg, xl,
  ...props
} ) => {
  const bootstrapClassSize = useMemo( () => {
    return Object.fromEntries(
      Object.entries( { size, sm, md, lg, xl } )
        .filter( ( [ key, value ] ) => !!value )
        .map( ( [ key, value ] ) => 
          key === 'size'
            ? [ `col-${value}`, true ] 
            : [ `col-${key}-${value}`, true ]
        )
    )
  }, [ size, sm, md, lg, xl ] )
  const className = useClassNames( 'col', bootstrapClassSize, classNameProp )
  return <div className={className} {...useStyleProp( props )} />
}

export default Col
