import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import authActions from "../redux/actions/authActions";
import image from "../assets/signIn.jpg";
import Swal from 'sweetalert2'

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
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'welcome'  + res.res.userName,
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
                                className="label-SI"
                                placeholder=" Email"
                                ref={email}
                            />
                            <input
                                type="password"
                                className="label-SI"
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
            <div
                className="signUpImg"
                style={{ backgroundImage: `url("${image}")` }}
            >
                <div className="parrSignUp">
                    <h1>Hello!</h1>
                    <p>
                        Welcome again to our site. We have so many captivating
                        games for you. Just sign up and visit our game store
                        with different selections. And don't forget to share
                        your opinions with!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignInComp;
