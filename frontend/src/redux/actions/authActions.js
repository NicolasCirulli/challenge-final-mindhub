import axios from "axios";

const token = localStorage.getItem("token");
const url = 'http://localhost:4000/api/'
const authActions = {
  newUser: ({
    firstName,
    lastName,
    userName,
    mail,
    password,
    image,
    address,
  }) => {
    return async (dispatch) => {
      try {
        const user = await axios.post(url+"user/signup", {
          firstName,
          lastName,
          userName,
          mail,
          password,
          image,
          address,
        });
        if (user.data.success) {
          localStorage.setItem("token", user.data.res.token);
          dispatch({
            type: "signIn",
            payload: {
              userName: user.data.res.userName,
              image: user.data.res.image,
              id: user.data.res.id,
              role : user.data.res.role,
              wishList : user.data.res.wishList,
            },
          });
          return user.data;
        }
        return user.data;
      } catch (err) {
        console.log(err);
      }
    };
  },
  signIn: ({ mail, password }) => {
    return async (dispatch) => {
      try {
        const user = await axios.post(url+"user/signin", {
          mail,
          password,
        });
        if (user.data.success) {
          localStorage.setItem("token", user.data.res.token);
          dispatch({
            type: "signIn",
            payload: {
              firstName: user.data.res.firstName,
              lastName: user.data.res.lastName,
              userName: user.data.res.userName,
              mail: user.data.res.mail,
              image: user.data.res.image,
              id: user.data.res._id,
              role : user.data.res.role,
              wishList : user.data.res.wishList
            },
          });
          return user.data;
        }
        return user.data;
      } catch (err) {
        console.log(err);
      }
    };
  },
  signInWithToken: (token) => {
    return async (dispatch) => {
      try {
        const user = await axios.post(
          url+"verifyToken",
          {},
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        user.data.success &&
          dispatch({
            type: "signIn",
            payload: {
              address: user.data.res.address,
              firstName: user.data.res.firstName,
              image: user.data.res.image,
              lastName: user.data.res.lastName,
              mail: user.data.res.mail,
              role : user.data.res.role,
              userName: user.data.res.userName,
              wishList : user.data.res.wishList,
              id: user.data.res._id,
            },
          });
      } catch (err) {
        console.log(err);
      }
    };
  },
  logOut: () => {
    localStorage.removeItem("token");
    return (dispatch, getState) => {
      dispatch({ type: "logOut", payload: "" });
    };
  },
  wishList : (idGame) => {
    return async (dispatch) =>{
      try{
        const res = await axios.put(url+"wishList/",{idGame},{
            headers:{
                'Authorization':'Bearer '+token 
            }
        });
        dispatch({
          type: "signIn",
          payload: {...res.data.response},
        });
    }catch (err) {console.log(err);}
    }
  },
  addToCart: (datos) =>{
    return (dispatch) => {
      
    dispatch({type:'add_cart'})
    console.log(datos);
    
    }
  },
  deleteCartItem: (idGame) =>{
    return async (dispatch) => {
    dispatch({type:'decrement_cart', payload:idGame})
    }
  },
  deleteCart: () =>{
    return async (dispatch) => {
    dispatch({type:'delete_cart'})
    }
  },
  setCartStore: () =>{
    return  (dispatch) => {
      const cartStorage = localStorage.getItem('cart')
      dispatch({type: 'setCartStore'})
      console.log(cartStorage);
    }
  }
};

export default authActions;

