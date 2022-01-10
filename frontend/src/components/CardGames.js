import * as React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import image from "../assets/fornite.jpg"


export default function RecipeReviewCard() {
    
    return (
        <div >
            <div disableSpacing className="card">
                <div
                    className="card-img"
                    style={{ backgroundImage: `url("${image}")`}}
                >
                    <IconButton aria-label="add to favorites" className="fav">
                        <FavoriteIcon className="favorite"/>
                    </IconButton>
                    <h3 className="card-title">Nombre</h3>
                </div>
            </div>
        </div>
    );
}
