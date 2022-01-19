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
<<<<<<< HEAD
              role: user.data.res.role,
=======
              role : user.data.res.role,
              wishList : user.data.res.wishList,
>>>>>>> d675d2cacabed9fbd11750fa1e58e05d058d97d4
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
        console.log(user)
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
<<<<<<< HEAD
              role: user.data.res.role,
=======
              role : user.data.res.role,
              wishList : user.data.res.wishList
>>>>>>> d675d2cacabed9fbd11750fa1e58e05d058d97d4
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
              firstName: user.data.res.firstName,
              lastName: user.data.res.lastName,
              userName: user.data.res.userName,
              mail: user.data.res.mail,
              image: user.data.res.image,
              address: user.data.res.address,
              id: user.data.res._id,
<<<<<<< HEAD
              role: user.data.res.role,
=======
              role : user.data.res.role,
              wishList : user.data.res.wishList
>>>>>>> d675d2cacabed9fbd11750fa1e58e05d058d97d4
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
        console.log(res.data.response);
        dispatch({
          type: "signIn",
          payload: {...res.data.response},
        });
    }catch (err) {console.log(err);}
    }
  }
};

<<<<<<< HEAD
export default usuarioActions;
=======
export default authActions;

>>>>>>> d675d2cacabed9fbd11750fa1e58e05d058d97d4
