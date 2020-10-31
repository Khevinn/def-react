import storeDev from './index.dev'
import storeProd from './index.prod'
import { IS_PROD, IS_JEST } from '../constants'

let store
if ( IS_PROD || IS_JEST ) store = storeProd
else store = storeDev

export default store
