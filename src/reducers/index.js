import { combineReducers } from 'redux'
import tunes from './tunes'
import visibilityFilter from './visibilityFilter'

const tuneApp = combineReducers({
  tunes,
  visibilityFilter
})

export default tuneApp
