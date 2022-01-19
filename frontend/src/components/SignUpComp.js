import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import authActions from "../redux/actions/authActions";
import countries from "./Countries";
import image from "../assets/signUp.jpg";
import GoogleLogin from "react-google-login";
import Swal from "sweetalert2";

const SignUpComp = () => {
  const Alert = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const responseGoogle = async (response) => {
    let googleUser = {
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName,
      userName: response.profileObj.name,
      password: response.profileObj.googleId,
      mail: response.profileObj.email,
      image: response.profileObj.imageUrl,
      address: "google",
      google: true,
    };
    await dispatch(authActions.newUser(googleUser))
      .then((res) => {
        if (res.succes) {
          Alert.fire({
            icon: "success",
            title: "Your account has been created",
          });
        } else {
          Alert.fire({
            title: res.error[0].message,
            icon: "error",
          });
        }
      })
      .catch((error) => {
        Alert.fire({
          icon: "error",
          title: "Something went wrong! Come back later!",
        });
      });
  };

  const dispatch = useDispatch();

  const [country, setCountry] = useState("");

  const name = useRef();
  const lastName = useRef();
  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const photo = useRef();

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const newUser = async () => {
    const user = {
      firstName: name.current.value,
      lastName: lastName.current.value,
      userName: userName.current.value,
      mail: email.current.value,
      password: password.current.value,
      image: photo.current.value,
      address: country,
      google: false,
    };
    if (!Object.values(user).some((value) => value === "")) {
      try {
        const res = await dispatch(authActions.newUser(user));
        console.log(res);
        if (res.succes) {
          alert("cuenta creada");
        } else {
          if (res.error) {
            res.response.map((e) => alert(e.message));
          } else {
            alert(res.res);
          }
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Todos los campos son obligatorios");
    }
  };

  return (
    <div className="backgroundSign">
      <div className="cardSignUp">
        <div>
          <div className="titlesSU">
            <h1 className="titleSignUp">Enjoy the benefits</h1>
            <h2>of beeing an xtreme user</h2>
            <h3 className="titleSignUp">Sign up xtreme</h3>
          </div>
          <form>
            <div className="bodyFormSU">
              <div className="onlyInputs">
                <div className="namesSU">
                  <div className="inputName">
                    <label>Name</label>
                    <input
                      type="text"
                      id="name"
                      className="labelSU"
                      ref={name}
                    />
                  </div>
                  <div className="inputLastame">
                    <label>Lastname</label>
                    <input
                      type="text"
                      id="lastname"
                      className="labelSU"
                      ref={lastName}
                    />
                  </div>
                  <div className="inputLastame">
                    <label>Username</label>
                    <input
                      type="text"
                      id="lastname"
                      className="labelSU"
                      ref={userName}
                    />
                  </div>
                </div>
                <div className="dataMail">
                  <div className="inputEmail">
                    <label>Email</label>
                    <input
                      type="text"
                      id="email"
                      className="labelSU"
                      ref={email}
                    />
                  </div>
                  <div className="inputPassword">
                    <label>Password</label>
                    <input
                      type="password"
                      id="password"
                      className="labelSU"
                      ref={password}
                    />
                  </div>
                </div>
                <div className="adicionalInfo">
                  <div className="inputPhoto">
                    <label>Photo</label>
                    <input
                      type="text"
                      id="photo"
                      className="labelSU"
                      ref={photo}
                    />
                  </div>
                  <div className="inputCountry">
                    <label>Country</label>
                    <select
                      type="text"
                      id="country"
                      className="labelSU"
                      onChange={handleCountry}
                    >
                      {countries.sort().map((country, index) => {
                        return (
                          <option
                            value={country}
                            key={index}
                            className="color-country"
                          >
                            {country}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="buttonsSignUp">
                <input
                  type="button"
                  className="linkSignIn"
                  value="Sign up"
                  onClick={newUser}
                />
                <p>or</p>
                <GoogleLogin
                  className="googleBtn"
                  clientId="441570016693-jv03t22mt950it3camu7if135vkr4bok.apps.googleusercontent.com"
                  buttonText="Sign Up with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="signUpImg" style={{ backgroundImage: `url("${image}")` }}>
        <div className="parrSignUp">
          <h1>Hello!</h1>
          <p>
            It's great to see you in our game store. We have so many captivating
            games for you. Just sign up and visit our game store with different
            selections. And don't forget to invite your friends to play
            together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpComp;
