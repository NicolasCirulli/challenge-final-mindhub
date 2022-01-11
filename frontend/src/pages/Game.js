import "../styles/game.css"
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";

export default function Game () {
    const [like, setlike] = useState(false)
    return (
        <>
            <div className="gamebg">
                <div className="container">
                    <h1 className="gamePath">STORE/</h1>
                </div>
                <div>
                    <h2 className="gametitle">Nombre del Juego</h2>
                    <IconButton aria-label="add to favorites" className="fav" onClick={() => setlike(!like)}>
                        {like? <FavoriteIcon className="favorite"/> : <FavoriteIcon className="favorite2"/>}
                    </IconButton>
                </div>
            </div>
            
        </>
    )
}