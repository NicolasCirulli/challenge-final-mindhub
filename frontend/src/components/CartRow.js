import React from "react";
import {useDispatch} from 'react-redux'
import cartActions from "../redux/actions/cartActions";


export default function CartRow({ game }) {


    const dispatch = useDispatch()

    const datos = {
        "name" : game.name,
        "image" : game.image,
        "price" : game.priceOffer || game.price,
        "amount" : 1,
        "id": game.id
    }

  return (
    
      
        <tr>
          <td>
            <img src={game.image} alt="game-img" className="game-img-fornite" />
          </td>
          <td>
            <p>{game.price}</p>
          </td>
          <td>
              <button onClick={() => dispatch(cartActions.deleteCartItem(game.id))}>X</button>
          </td>
        </tr>
     
    
  );
}
