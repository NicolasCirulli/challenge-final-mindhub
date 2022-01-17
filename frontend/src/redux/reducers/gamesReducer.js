const initialState = {
    games: [],
}

const gamesReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'ALL_GAMES':
                return{
                    ...state,
                    games : action.payload,  
                }

        
        
        default: 
            return state
    }
}

export default gamesReducer