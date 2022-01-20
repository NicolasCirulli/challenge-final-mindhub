import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import authActions from "../redux/actions/authActions";
import countries from "./Countries";
import image from "../assets/ez.png";
import GoogleLogin from "react-google-login";
import Swal from "sweetalert2";
import {ref, uploadBytesResumable,getDownloadURL} from 'firebase/storage'
import { storage, db } from "../firebaseConfig"
import {collection, addDoc} from "firebase/firestore"

const SignUpComp = () => {
  const [imageFirebase, setImageFirebase] = useState('')
  const [progress,setProgress] = useState(false)
  const [load,setLoad] =useState(false)

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
            icon: "succes",
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
      image: imageFirebase,
      address: country,
      google: false,
    };
    if (!Object.values(user).some((value) => value === "")) {
      try {
        const res = await dispatch(authActions.newUser(user));
        if (res.succes) {
          Alert.fire({
            icon: "succes",
            title: "Your account was created, check your email to confirm it",
          });
        } else {
          if (res.error) {
            res.response.map((e) => Alert.fire({
              icon: "error",
              title: e.message,
              iconColor: '#af3181',
            }));
          } else {
            Alert.fire({
              icon: "error",
              title: res.res,
              iconColor: '#af3181',
            });
          }
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      Alert.fire({
        icon: "warning",
        title: "All fields must be completed",
        iconColor: '#af3181',
      });
    }
  
  };

  const handleImage = e =>{
    
    const link = `/images/${Date.now()}${e.target}`
    const storageRef = ref(storage, link)
    const uploadImage = uploadBytesResumable(storageRef, e.target.files[0])
    uploadImage.on("state_changed", (snapshot) =>{
      const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      setProgress(progressPercent)
    },
    (err) => {console.log(err)},
    () =>{
      getDownloadURL(uploadImage.snapshot.ref)
        .then(url =>{
          setImageFirebase(url);
          const imageRef = collection(db,"images");
          addDoc(imageRef, {imageUrl : url}).then((res) => {
            Alert.fire({
              icon: "success",
              title: 'image added successfully',
            })
            setLoad(true)
            setProgress(100)
          }).catch(err => {Alert.fire({
            icon: "warning",
            title: 'The image did not load correctly, you must wait a few seconds before registering',
            iconColor: '#af3181',
          })})
        })
    })
  }


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
                  <div className="inputName btn-input">

                    <input
                    placeholder="Name"
                      type="text"
                      id="name"
                      className="labelSU"
                      ref={name}
                    />
                  </div>
                  <div className="inputLastame btn-input">

                    <input
                    placeholder="Lastname"
                      type="text"
                      id="lastname"
                      className="labelSU"
                      ref={lastName}
                    />
                  </div>
                  <div className="inputLastame btn-input">

                    <input
                    placeholder="Username"
                      type="text"
                      id="lastname"
                      className="labelSU"
                      ref={userName}
                    />
                  </div>
                </div>
                <div className="dataMail">
                  <div className="inputEmail btn-input">

                    <input
                    placeholder="Email"
                      type="text"
                      id="email"
                      className="labelSU"
                      ref={email}
                    />
                  </div>
                  <div className="inputPassword btn-input">
       
                    <input
                    placeholder="Password"
                      type="password"
                      id="password"
                      className="labelSU"
                      ref={password}
                    />
                  </div>
                </div>
                <div className="adicionalInfo">
                  <div className="inputPhoto btn-input">

                    <input
                      type="file"
                      id="photo"
                      className="labelSU btn-photo"
                      ref={photo}
                      accept="image/*"
                      onChange={(e)=>handleImage(e)}
                    />
                  </div>
                  <div className="inputCountry btn-input">
  
                    <select

                      type="text"
                      id="country"
                      className="labelSU"
                      onChange={handleCountry}
                    >
                      <option disabled>Country</option>
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
               {load ? <input
                  type="button"
                  className="linkSignIn"
                  value="Sign up"
                  onClick={newUser}
                />
                :<input
                  type="button"
                  className="linkSignIn"
                  value="Sign up"
                  onClick={newUser}
                  dissable
                />}
                <p>or</p>
                <GoogleLogin
                  className="googleBtn"
                  clientId="441570016693-jv03t22mt950it3camu7if135vkr4bok.apps.googleusercontent.com"
                  buttonText="Sign Up with Google"
                  onSucces={responseGoogle}
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