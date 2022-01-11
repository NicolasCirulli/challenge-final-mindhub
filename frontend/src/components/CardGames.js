import * as React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import image from "../assets/fornite.jpg"
import { useState } from "react";


export default function RecipeReviewCard() {
    const [like, setlike] = useState(false)
    return (
            <div className="card">
                <div
                    className="card-img"
                    style={{ backgroundImage: `url("${image}")`}}
                >
                    <IconButton aria-label="add to favorites" className="fav" onClick={() => setlike(!like)}>
                        {like? <FavoriteIcon className="favorite"/> : <FavoriteIcon className="favorite2"/>}
                    </IconButton>
                    <h3 className="card-title">Nombre</h3>
                </div>
            </div>
    );
}
