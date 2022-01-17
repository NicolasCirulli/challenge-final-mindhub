import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import authActions from "../redux/actions/authActions";
import countries from "./Countries";
import image from "../assets/signUp.jpg";
import Swal from 'sweetalert2'

const SignUpComp = () => {
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
        };
        if (!Object.values(user).some((value) => value === "")) {
            try {
                const res = await dispatch(authActions.newUser(user));
                console.log(res);
                if (res.success) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Welcome! Your account was created successfully',
                        background: '#343744',
                        iconColor: '#11edd3',
                        color: '#fff',
                        showConfirmButton: false,
                        timer: 2000
                    })
                } else {
                    if (res.error) {
                        res.response.map((e) => Swal.fire({
                            position: 'center',
                            icon: 'error',
                            background: '#343744',
                            iconColor: '#af3181',
                            color: '#fff',
                            title: e.message,
                            showConfirmButton: false,
                            timer: 1500
                        }));
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
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                background: '#343744',
                iconColor: '#af3181',
                color: '#fff',
                title: 'All fields are required',
                showConfirmButton: false,
                timer: 1500
            })
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
                                            <option disabled selected>Country of origin</option>
                                            {countries
                                                .sort()
                                                .map((country, index) => {
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
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div
                className="signUpImg"
                style={{ backgroundImage: `url("${image}")` }}
            >
                <div className="parrSignUp">
                    <h1>Hello!</h1>
                    <p>
                        It's great to see you in our game store. We have so many
                        captivating games for you. Just sign up and visit our
                        game store with different selections. And don't forget
                        to invite your friends to play together!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpComp;
