import * as React from "react";
import fornite from "../assets/fornite.jpg";
import { Table, Button } from "react-bootstrap";
import {Link} from "react-router-dom"

export default function CardCart({ game }) {

    return (
        <div className="bg-conteiner-cart" >
            <div className="conteiner-all-cart">
            <div className="card-all-cart">
                <Table striped bordered hover className="table-cart">
                    <thead>
                        <tr>
                            <th>Game</th>
                            <th>Prize</th>
                            <th>Amount</th>
                            <th>Subtotal</th>
                            <th>Delete product</th>
                        </tr>
                    </thead>
                    <tbody>
                        <img
                            src={fornite}
                            alt="game-img"
                            className="game-img-fornite"
                        />
                    </tbody>
                    <tbody>
                    <img
                            src={fornite}
                            alt="game-img"
                            className="game-img-fornite"
                        />
                    </tbody>
                    <tbody>
                    <img
                            src={fornite}
                            alt="game-img"
                            className="game-img-fornite"
                        />
                    </tbody>
                </Table>
            </div>
            <div className="cart-second">
                <h2 className="title-cart-buy">Your resume</h2>
                <p className="cart-subtotal">Subtotal:</p>
                <h3 className="cart-total">Total:</h3>
                <button className="btn-checkout">Proceed to checkout</button>
            </div>
            </div>
            <Button className="btn-back-shop" as={Link} to="/games" >Continue shopping</Button>

        </div>
    );
}