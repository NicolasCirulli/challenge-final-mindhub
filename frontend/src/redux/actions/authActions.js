import axios from "axios";

const usuarioActions = {
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
        const user = await axios.post("http://localhost:4000/api/user/signup", {
          firstName,
          lastName,
          userName,
          mail,
          password,
          image,
          address,
        });
        if (user.data.success) {
          localStorage.setItem("token", user.data.response.token);
          dispatch({
            type: "signIn",
            payload: {
              userName: user.data.response.userName,
              image: user.data.response.image,
              id: user.data.response.id,
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
        const user = await axios.post("http://localhost:4000/api/user/signin", {
          mail,
          password,
        });
        console.log(user);
        if (user.data.success) {
          localStorage.setItem("token", user.data.res.token);
          dispatch({
            type: "signIn",
            payload: {
              userName: user.data.res.userName,
              image: user.data.res.image,
              id: user.data.res._id,
            },
          });
          return user.data;
        }
    },
    logOut: () => {
        localStorage.removeItem("token")
    return (dispatch, getState) => {
        dispatch({type: 'logOut', payload: ""})
    }
    }
}

export default usuarioActions
