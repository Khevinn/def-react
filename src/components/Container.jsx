import useClassNames from "../hooks/useClassNames"

const Container = ( { className: classNameProp, ...props } ) => {
  const className = useClassNames( 'container', classNameProp )
  return <div className={className} {...props} />
}

export default Container
