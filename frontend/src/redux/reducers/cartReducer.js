const initialState = {
    cart: [],
    totalPrice : 0,
    totalAmount : 0
}

const total = (array) => {
    const aux = array.map(game => game.price * game.amount).reduce((previousValue, currentValue) => previousValue + currentValue)
    return aux.toFixed(2)
}

const totalAmount = (array = []) =>{
    const aux = array.map(game => game.amount).reduce((previousValue, currentValue) => previousValue + currentValue)
    return aux
}



const cartReducer = (state = initialState, action)=>{
    
    switch(action.type){
        case 'add_cart':
            let aux = []
            let bool = state.cart.some(e => e.id === action.payload.id)
            if(!bool){
                // let datos = state.cart.find(game => game.id === action.payload.id)
                // datos.amount++
                // aux = state.cart.filter(game => game.id !== action.payload.id)
                // aux.push(datos)
                aux = [...state.cart, action.payload]
            }
            localStorage.setItem('cart', JSON.stringify(aux))
            
            
                return{
                    ...state,
                    cart : aux,
                    totalPrice : total(aux),
                    totalAmount : totalAmount(aux),
                    
                }
        case 'decrement_cart':
            let auxDecrement;
            let auxGame = state.cart.find(game => game.id === action.payload)
            if(auxGame.amount > 1){
                let aux = state.cart.filter(game => game.id !== action.payload)
                auxGame.amount--
                aux.push(auxGame)
                auxDecrement = aux
            }else{
                auxDecrement = []
            }
            if(auxDecrement.length > 0){
                localStorage.setItem('cart', JSON.stringify(auxDecrement))
            }else{
                localStorage.removeItem('cart')
                auxDecrement = []
            }
                return{
                    ...state,
                    cart : auxDecrement,
                    totalPrice : total(auxDecrement),
                    totalAmount : totalAmount(auxDecrement),
                }
        case 'delete_cart' :
                localStorage.removeItem('cart')
                return{
                    state : initialState,
                    totalPrice : 0
                }
        case 'delete_cart_item' :
                let auxDelete = state.cart.filter( game => game.id !== action.payload)
                let price = 0
                console.log(auxDelete.length);
                if(auxDelete.length === 0){
                    localStorage.removeItem('cart')
                    console.log('entre al true');
                }else{
                    console.log('entre al false');
                    price = total(auxDelete)
                    localStorage.setItem('cart', JSON.stringify(auxDelete))
                }
                console.log(price);
                return{
                    ...state,
                    cart : auxDelete,
                    totalPrice : price
                    
                }
        case 'setCartStore':
                return{
                    ...state,
                    cart : action.payload,
                    totalPrice : total(action.payload),
                    totalAmount : totalAmount(action.payload),
                    
                }
        
        default: 
            return state
    }
}

export default cartReducer