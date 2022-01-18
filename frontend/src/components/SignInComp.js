import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import authActions from "../redux/actions/authActions";
import image from "../assets/signIn.jpg";
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2';

const SignInComp = () => {
    const dispatch = useDispatch();

    const email = useRef();
    const password = useRef();
    const Alert = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: toast => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const responseGoogle = async (response) => {
        console.log(response);
        let googleUser = {
            email: response.profileObj.email,
            password: response.profileObj.googleId,
            flagGoogle: true
        }
        await dispatch (authActions.signIn(googleUser))
    .then(res => {
        if (res.success){
            console.log(res)
            Alert.fire({
              icon: 'success',
              title: 'Welcome '+res.response.userName
        })
      }
      else{
        console.log(res)
        Alert.fire({
          title: res.error[0].message,
          icon: 'error'
      })
    }
    })
    .catch((error) => {
        console.log(error)
        Alert.fire({
            icon: 'error',
            title: 'You have to sign up before you log in!'
          })
  })
    }

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
                  Swal.fire({
                      position: 'center',
                      icon: 'success',
                      title: 'welcome '  + res.res.userName + '!',
                      background: '#343744',
                      iconColor: '#11edd3',
                      color: '#fff',
                      showConfirmButton: false,
                      timer: 1500
                  })
              } else {
                  Swal.fire({
                      position: 'center',
                      icon: 'error',
                      background: '#343744',
                      iconColor: '#af3181',
                      color: '#fff',
                      title: res.res,
                      showConfirmButton: false,
                      timer: 1500
                  })
              }
          } catch (err) {
              console.log(err);
          }
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
               <p className="or-sign-in">or</p>
                            <GoogleLogin
                                    className='googleBtn'
                                    clientId="441570016693-jv03t22mt950it3camu7if135vkr4bok.apps.googleusercontent.com"
                                    buttonText="Sign In with Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
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