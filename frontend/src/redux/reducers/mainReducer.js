import { combineReducers } from 'redux'

import userReducer from './userReducer'
import gamesReducer from './gamesReducer'

const mainReducer = combineReducers({

    userReducer,
    gamesReducer

})

export default mainReducer