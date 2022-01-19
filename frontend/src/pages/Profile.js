import React, { useState, useRef, useEffect } from "react";
import "../styles/profile.css";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import { useSelector, useDispatch } from "react-redux";
import authActions from "../redux/actions/authActions";
import { updateUser } from "../helpers/querys";

export default function Profile() {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.userReducer.user);
    const allGames = useSelector((store) => store.gamesReducer.games);
    localStorage.getItem("token") &&
        !user &&
        dispatch(authActions.signInWithToken());

    const [data, setData] = useState(user);
    const [placeholder, setPlaceholder] = useState("probando");
    const [render, setRender] = useState(false);
    const [field, setField] = useState(null);
    const [gameFav, setGameFav] = useState([]);
    const input = useRef();

    const handleInput = (placeholder, query) => {
        setPlaceholder(placeholder);
        setRender(true);
        setField(query);
    };
    const update = () => {
        const body = {
            [field]: input.current.value,
        };
        updateUser(data.id, body)
            .then((res) => {
                setData(res.response.respuesta);
                reset();
            })
            .catch((err) => console.log(err));
    };

    const reset = () => {
        setRender(false);
        setField(null);
        setPlaceholder("");
    };
    useEffect(() => {
        setData(user);
    }, [user]);
    useEffect(() => {
        let aux = [];
        user &&
            user.wishList[0] &&
            allGames &&
            allGames.map((game) => {
                user.wishList.map((wish) => {
                    if (game._id === wish) {
                        aux.push(game);
                    }
                });
            });
        setGameFav(aux);
    }, []);
    console.log(gameFav);
    return (
        <>
            <div className="container profile">
                <div>
                    <h1 className="profile-title">PROFILE</h1>
                </div>
                <div className="info-profile">
                    <div className="cont-edit-profile">
                        <div className="profile-img-div">
                            <img className="profile-img" src={data.image} />
                            <EditIcon
                                onClick={() =>
                                    handleInput("New image", "image")
                                }
                                className="icon-edit edit-img"
                            />
                        </div>
                        <div className="profile-info">
                            <div className="edit-data-profile">
                                <div className="cont-form">
                                    <label className="nameandcountry">
                                        Name:{" "}
                                    </label>
                                    <h2 className="data-edit">
                                        {data.firstName}
                                    </h2>
                                </div>
                                <EditIcon
                                    onClick={() =>
                                        handleInput("New name", "firstName")
                                    }
                                    className="icon-edit"
                                />
                            </div>
                            <div className="edit-data-profile">
                                <div className="cont-form">
                                    <label className="nameandcountry">
                                        Last Name:{" "}
                                    </label>
                                    <h2 className="data-edit">
                                        {data.lastName}
                                    </h2>
                                </div>
                                <EditIcon
                                    onClick={() =>
                                        handleInput("New last name", "lastName")
                                    }
                                    className="icon-edit"
                                />
                            </div>
                            <div className="edit-data-profile">
                                <div className="cont-form">
                                    <label className="nameandcountry">
                                        User Name:{" "}
                                    </label>
                                    <h2 className="data-edit">
                                        {data.userName}
                                    </h2>
                                </div>
                                <EditIcon
                                    onClick={() =>
                                        handleInput("New user name", "userName")
                                    }
                                    className="icon-edit"
                                />
                            </div>
                            <div className="edit-data-profile">
                                <div className="cont-form">
                                    <label className="nameandcountry">
                                        Address:{" "}
                                    </label>
                                    <h2 className="data-edit">
                                        {data.address}
                                    </h2>
                                </div>
                                <EditIcon
                                    onClick={() =>
                                        handleInput("New country", "address")
                                    }
                                    className="icon-edit"
                                />
                            </div>
                        </div>
                    </div>
                    {render && (
                        <div className="cont-input-edit">
                            <div className="input-width-send">
                                <input
                                    type="text"
                                    className="input-edit"
                                    placeholder={placeholder}
                                    ref={input}
                                />
                                <SendIcon
                                    className="send-icon"
                                    onClick={update}
                                />
                            </div>
                            <CancelIcon
                                className="cancel-icon"
                                onClick={reset}
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="container fav-div">
                <h3 className="fav-title">FAVORITE GAMES:</h3>
            </div>
            <div className="container favorites">
                <div className="e-card-ht-game">
                    <div className="e-card-image-game">
                        <div className="e-card-titleht">*nombre de juego*</div>
                    </div>
                    <div className="e-card-content"></div>
                </div>
            </div>
        </>
    );
}
