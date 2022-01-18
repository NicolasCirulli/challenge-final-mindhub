import axios from "axios";

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
          localStorage.setItem("token", user.data.res.token);
          dispatch({
            type: "signIn",
            payload: {
              userName: user.data.res.userName,
              image: user.data.res.image,
              id: user.data.res.id,
              role : user.data.res.role
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
              role : user.data.res.role
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
          "http://localhost:4000/api/verifyToken",
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
              role : user.data.res.role
            },
          });
      } catch (err) {
        console.log(err);
      }
    };
  },
  logOut: () => {
    localStorage.removeItem("token")
  return (dispatch, getState) => {
    dispatch({type: 'logOut', payload: ""})
  }
  },
};

export default authActions;

