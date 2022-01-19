import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Favorite from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import cartActions from "../redux/actions/cartActions";

export default function CardGame({ game }) {
    
    const dispatch = useDispatch()

    const datos = {
        "name" : game.name,
        "image" : game.background_image,
        "price" : game.price,
        "amount" : 1,
        "id": game._id
    }
    
    return (
        <div className="card">
            <div
                className="card-img card-img-precio"
                style={{ backgroundImage: `url("${game.background_image}")` }}
            >
                <IconButton aria-label="add to favorites" className="fav">
                    <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite className="favorite"/>}
                    />
                </IconButton>
                <div className="cont-card-title">
                    <div className="card-title">
                        <Link className="name-game name-price" to={`/game/${game._id}`}>
                            {game.name}
                        </Link>
                        <p className="price-game">$ {game.price}</p>
                    </div>
                    <button className="cont-btn-cart" onClick={() => dispatch(cartActions.addToCart(datos))}><AddShoppingCartIcon className="btn-cart" /></button>
                </div>
            </div>
        </div>
    );
}
