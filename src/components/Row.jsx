import useClassNames from "../hooks/useClassNames"
import useStyleProp from "../hooks/useStyleProp"

const Row = ( { className: classNameProp, ...props } ) => {
  const className = useClassNames( 'row', classNameProp )
  return <div className={className} {...useStyleProp( props )} />
}

export default Row
