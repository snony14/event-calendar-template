import {combineReducers} from 'redux'
import bootstrapReducer from './bootstrap'
import calendarPageReducer from './calendarPage'

export default combineReducers({
    bootstrap: bootstrapReducer,
    calendar: calendarPageReducer
})