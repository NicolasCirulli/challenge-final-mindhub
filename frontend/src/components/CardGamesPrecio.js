import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Favorite from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import cartActions from "../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../redux/actions/authActions";
import Swal from "sweetalert2";

export default function CardGame({ game }) {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.userReducer.user);

    const datos = {
        name: game.name,
        image: game.background_image,
        price: game.price,
        amount: 1,
        id: game._id,
    };
    const handleFavs = () => {
        user
            ? dispatch(authActions.wishList(game._id))
            : Swal.fire({
                toast: true,
                position: "top-end",
                icon: "warning",
                iconColor: "#af3181",
                showConfirmButton: false,
                timer: 3000,
                title: "You must log in to be able to like!",
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });
    };

    return (
        <div className="card">
            <div
                className="card-img card-img-precio"
                style={{ backgroundImage: `url("${game.background_image}")` }}
            >
                <IconButton
                    aria-label="add to favorites"
                    className="fav"
                    onClick={handleFavs}
                >
                    <Checkbox
                        icon={
                            user ? (
                                !user.wishList.includes(game._id) ? (
                                    <FavoriteBorder />
                                ) : (
                                    <Favorite className="favorite" />
                                )
                            ) : (
                                <FavoriteBorder />
                            )
                        }
                    />
                </IconButton>
                <div className="cont-card-title">
                    <div className="card-title">
                        <Link
                            className="name-game name-price"
                            to={`/game/${game._id}`}
                        >
                            {game.name}
                        </Link>
                        <p className="price-game">$ {game.price}</p>
                    </div>
                    <button
                        className="cont-btn-cart"
                        onClick={() => dispatch(cartActions.addToCart(datos))}
                    >
                        <AddShoppingCartIcon className="btn-cart" />
                    </button>
                </div>
            </div>
        </div>
    );
}
