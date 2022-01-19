const cartActions = {

  addToCart: (datos) =>{
    return (dispatch) => dispatch({type:'add_cart', payload : datos});
  },
  decrementCartItem: (idGame) =>{
    return async (dispatch) => {
    dispatch({type:'decrement_cart', payload:idGame})
    }
  },
  deleteCartItem: (idGame) =>{
    return async (dispatch) => {
    dispatch({type:'delete_cart_item', payload:idGame})
    }
  },
  deleteCart: () =>{
    return async (dispatch) => {
    dispatch({type:'delete_cart'})
    }
  },
  setCartStore: (cart) =>{
      
    return  (dispatch) => {
      const cartStorage = localStorage.getItem('cart')
      dispatch({type: 'setCartStore', payload:cart})
      console.log(cartStorage);
    }
  }
};

export default cartActions;