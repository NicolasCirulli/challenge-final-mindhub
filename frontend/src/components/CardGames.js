import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../redux/actions/authActions";

export default function RecipeReviewCard({game}) {
    const dispatch = useDispatch()
    const favs = useSelector(store => store.userReducer.user.wishList)
    console.log(favs);

    const handleFavs = ()=>{
        dispatch(authActions.wishList)
    }

    return (
            <div className="card">
                <div
                    className="card-img"
                    style={{ backgroundImage: `url("${game.background_image}")`}}
                >
                    <IconButton aria-label="add to favorites" className="fav" >
                    <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite className="favorite"/>}
                    />
                    </IconButton>
                    <div className="card-title">
                        <Link className="name-game " to={`/game/${game._id}`}>{game.name}</Link>
                    </div>
                </div>
            </div>
    );
}
