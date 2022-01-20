import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../styles/cart2.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBagCheck } from "react-icons/bs";
import { useSelector } from "react-redux";
import CartRow from "./CartRow";


export default function BasicTable() {
  const cartStore = useSelector((store) => store.cartReducer.cart);
  const totalPrice = useSelector((store) => store.cartReducer.totalPrice);
  return (
    <>
    <div className="container title-cart">
          <h3 >Cart:</h3>
        </div>
      <div className="container table-cart">

        <div className="all-cart">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                <TableCell align="right"></TableCell>
                  <TableCell align="left">Game</TableCell>
                  <TableCell align="right">Prize</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {cartStore.map((game) => (
                <CartRow game={game}/>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="checkout-cart">
          <div className="cart-second">
            <h2 className="title-cart-buy">Your resume</h2>
            <p className="cart-subtotal">Purchased: </p>
            {cartStore.map((game) => (
              <p>
                {" "}
                {game.name} <br></br> {game.amount} Items, $ {game.price * game.amount}USD
              </p>
            ))}
            <h3 className="cart-total">Total: $ {totalPrice} </h3>
            <button className="btn-checkout">
              Proceed to checkout <BsBagCheck className="icon-checkout" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Button className="btn-back-shop" as={Link} to="/games">
          Continue shopping
        </Button>
      </div>
    </>
  );
}
