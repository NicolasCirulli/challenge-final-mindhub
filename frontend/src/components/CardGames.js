import * as React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import image from "../assets/fornite.jpg"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RecipeReviewCard({game}) {
    const [like, setlike] = useState(false)
    return (
            <div className="card">
                <div
                    className="card-img"
                    style={{ backgroundImage: `url("${game.background_image}")`}}
                >
                    <IconButton aria-label="add to favorites" className="fav" onClick={() => setlike(!like)}>
                        {like? <FavoriteIcon className="favorite"/> : <FavoriteIcon className="favorite2"/>}
                    </IconButton>
                    <div className="card-title">
                        <h3 className="name-game">{game.name}</h3>
                        <Link className="link-game" to="/game">View More</Link>
                    </div>
                </div>
            </div>
            
    );
}
