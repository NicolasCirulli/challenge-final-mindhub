const initialState = {
    user: false,
}

const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'signIn':
                return{
                    ...state,
                    user : action.payload,  
                }

        case 'logOut':
            return{
                ...state,
                user : action.payload, 
            }
        
        default: 
            return state
    }
}

export default userReducer