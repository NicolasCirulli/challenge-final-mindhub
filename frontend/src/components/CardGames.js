import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../redux/actions/authActions";
import Swal from "sweetalert2";

export default function RecipeReviewCard({ game }) {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.userReducer.user);

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
                className="card-img"
                style={{ backgroundImage: `url("${game.background_image}")` }}
            >
                <IconButton
                    aria-label="add to favorites"
                    className="fav"
                    onClick={handleFavs}
                >
<<<<<<< HEAD
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

                <div className="card-title">
                    <Link className="name-game " to={`/game/${game._id}`}>
                        {game.name}
                    </Link>
=======
                    {
                        user &&
                        <IconButton aria-label="add to favorites" className="fav" onClick={handleFavs}>
                    <Checkbox
                        // icon={<FavoriteBorder />}
                        // checkedIcon={<Favorite className="favorite"/>}
                        icon={!user.wishList.includes(game._id) ? <FavoriteBorder /> : <Favorite className="favorite"/>}
                        />
                    </IconButton>
                    }
                    <div className="card-title">
                        <Link className="name-game " to={`/game/${game._id}`}>{game.name}</Link>
                    </div>
>>>>>>> 391f79a5d569e65b84f7d5aa3c50cf72d9c91db3
                </div>
            </div>
        </div>
    );
}
