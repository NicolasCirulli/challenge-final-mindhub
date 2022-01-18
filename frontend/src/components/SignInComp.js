import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import authActions from "../redux/actions/authActions";
import image from "../assets/signIn.jpg";

const SignInComp = () => {
  const dispatch = useDispatch();

  const email = useRef();
  const password = useRef();

  const signIn = async () => {
    const user = {
      mail: email.current.value,
      password: password.current.value,
    };
    if (!Object.values(user).some((value) => value === "")) {
      try {
        const res = await dispatch(authActions.signIn(user));
        console.log(res);
        if (res.success) {
          alert("welcome " + res.res.userName);
        } else {
          alert(res.res);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Todos los campos son obligatorios");
    }
  };

  return (
    <div className="backgroundSignIn">
      <div className="cardSign">
        <div className="contentSignIn">
          <h1 className="titleSignIn">It's great to see you again</h1>
          <h2>Sign in xtreme</h2>
          <form>
            <div className="inputsSignIn">
              <input
                type="text"
                className="label-SI email"
                placeholder=" Email"
                ref={email}
              />
              <input
                type="password"
                className="label-SI password"
                placeholder=" Password"
                ref={password}
              />
              <input
                type="button"
                className="linkSignIn"
                value="Sign in"
                onClick={signIn}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="signUpImg" style={{ backgroundImage: `url("${image}")` }}>
        <div className="parrSignUp">
          <h1>Hello!</h1>
          <p>
            Welcome again to our site. We have so many captivating games for
            you. Just sign up and visit our game store with different
            selections. And don't forget to share your opinions with!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInComp;
