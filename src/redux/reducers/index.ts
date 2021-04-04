import { combineReducers } from 'redux'
import authReducer from './auth.reducer'
import impressionsReducer from './impressions.reducer'

export default combineReducers({ impressionsReducer });