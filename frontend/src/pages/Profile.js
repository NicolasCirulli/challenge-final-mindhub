import React, { useState, useRef, useEffect } from "react";
import "../styles/profile.css";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import { useSelector, useDispatch } from "react-redux";
import authActions from "../redux/actions/authActions";
import gamesActions from "../redux/actions/gamesActions";
import { updateUser } from "../helpers/querys";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import cartActions from "../redux/actions/cartActions";
import FlipMove from 'react-flip-move';
import Swal from "sweetalert2";

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
    function handleFavs (gameId) {
        dispatch(authActions.wishList(gameId))

    };

    useEffect(() => {
        setData(user);
    }, [user]);
    !allGames[0] && dispatch(gamesActions.getAllGames());
    useEffect(() => {
        let aux = allGames.filter((game) => user?.wishList?.indexOf(game._id) >= 0);

        setGameFav(aux);
    }, [allGames, user]);

    return (
        <div className="cont-all-profile">
            <div className="container profile">
                <div>
                    <h1 className="profile-title">PROFILE</h1>
                </div>
                {data && (
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
                                            handleInput(
                                                "New last name",
                                                "lastName"
                                            )
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
                                            handleInput(
                                                "New user name",
                                                "userName"
                                            )
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
                                            handleInput(
                                                "New country",
                                                "address"
                                            )
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
                )}
            </div>
            <div className="container fav-div">
                <h3 className="fav-title">Wish List:</h3>
            </div>
            <div >
                <FlipMove className="container favorites">
                    {gameFav[0] &&
                        gameFav.map((game) => {
                            const datos = {
                                name: game.name,
                                image: game.background_image,
                                price: game.price,
                                amount: 1,
                                id: game._id,
                            };
                            return (
                                <div
                                    className="card-game-fav"
                                    style={{
                                        backgroundImage: `url("${game.background_image}")`,
                                    }}
                                >
                                    <div className="title-card-fav">
                                        <h5 className="title-text-fav">
                                            {game.name}
                                        </h5>
                                        <span className="delete-fav" onClick={() => handleFavs(game._id)}><HighlightOffIcon /></span>
                                    </div>
                                    <div className="cont-card-title">
                                        <div className="card-title">
                                            <Link
                                                className="name-game name-price"
                                                to={`/game/${game._id}`}
                                            >
                                                {game.name}
                                            </Link>
                                            <p className="price-game">
                                                $ {game.price}
                                            </p>
                                        </div>
                                        <button
                                            className="cont-btn-cart"
                                            onClick={() =>
                                                dispatch(
                                                    cartActions.addToCart(datos)
                                                )  && Swal.fire({
                                                    toast: true,
                                                    position: "top-end",
                                                    icon: "success",
                                                    showConfirmButton: false,
                                                    timer: 3000,
                                                    title: "It has been added to the cart!",
                                                    timerProgressBar: true,
                                                    didOpen: (toast) => {
                                                        toast.addEventListener("mouseenter", Swal.stopTimer);
                                                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                                                    },
                                                })
                                            }
                                        >
                                            <AddShoppingCartIcon className="btn-cart" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                </FlipMove>
            </div>
        </div>
    );
}
