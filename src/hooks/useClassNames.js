import { useMemo } from 'react'
import classNames from 'classnames'

const useClassNames = (
  arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9
) => {
  return useMemo( () => {
    return classNames( arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 )
  }, [ arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 ] )
}

export default useClassNames
