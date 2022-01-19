import { combineReducers } from 'redux'

import userReducer from './userReducer'
import gamesReducer from './gamesReducer'
import cartReducer from './cartReducer'

const mainReducer = combineReducers({

    userReducer,
    gamesReducer,
    cartReducer

})

export default mainReducer