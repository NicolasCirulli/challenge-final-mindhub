import React from "react";
import {useDispatch} from 'react-redux'
import TableCell from "@mui/material/TableCell";
import cartActions from "../redux/actions/cartActions";
import TableRow from "@mui/material/TableRow";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


export default function CartRow({ game }) {


    const dispatch = useDispatch()

    const datos = {
        "name" : game.name,
        "image" : game.image,
        "price" : game.priceOffer || game.price,
        "amount" : 1,
        "id": game.id
    }
    console.log(game)
  return (
    
      <TableRow className="trow">
        <TableCell component="th" scope="row">
          <img src={game.image} alt="game-img" className="gametrow" />
        </TableCell>
        <TableCell component="th" scope="row">
          {game.name}
        </TableCell>
        <TableCell align="right">${game.price}</TableCell>
        <TableCell align="right">  <IconButton aria-label="delete" onClick={() => dispatch(cartActions.deleteCartItem(game.id))}> <DeleteIcon /></IconButton>
      </TableCell>
      </TableRow>
       
       
 
  )
}
       
