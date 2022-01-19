import * as React from "react";
import fornite from "../assets/fornite.jpg";
import { Table, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import {BsBagCheck} from "react-icons/bs"
import {useSelector} from "react-redux"
import CartRow from "./CartRow"
export default function CardCart({ game }) {

    const cartStore = useSelector(store => store.cartReducer.cart)
    const totalPrice= useSelector(store => store.cartReducer.totalPrice)
    
    return (
        <div className="bg-conteiner-cart" >
            <div className="conteiner-all-cart">
            <div className="card-all-cart">
                <Table  bordered  className="table-cart">
                    <thead>
                        <tr>
                            <th>Game</th>
                            <th>Prize</th>
                            {/* <th>Amount</th>
                            <th>Subtotal</th> */}
                            <th>x</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartStore.map( game => <CartRow game={game} />)}
                    </tbody>
                </Table>
            </div>
            <div className="cart-second">
                <h2 className="title-cart-buy">Your resume</h2>
                <p className="cart-subtotal">Subtotal: </p>
                    { cartStore.map(game => <p> {game.name}, amount: {game.amount}, $ {game.price * game.amount}</p>)}
                <h3 className="cart-total">Total: $ {totalPrice} </h3>
                <button className="btn-checkout">Proceed to checkout <BsBagCheck className="icon-checkout"/></button>
            </div>
            </div>
            <Button className="btn-back-shop" as={Link} to="/games" >Continue shopping</Button>

        </div>
    );
}