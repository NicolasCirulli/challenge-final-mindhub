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
import { useState } from "react";
import CartRow from "./CartRow";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { connect } from "react-redux";



export default function BasicTable() {
  const cartStore = useSelector((store) => store.cartReducer.cart);
  const totalPrice = useSelector((store) => store.cartReducer.totalPrice);
  const [success, setSuccess] = useState(false);
  const [orderID, setOrderID] = useState(false);
  const [payPal, setPayPal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const initialOptions = {
  "client-id":
    "ASZvH8kLnEArfBqrOnXXmG4LT39seVoHdU_JEh_bbbsoP3ShhtXwptb7f8xR5gYEDgx2Apf2tn20Z0DE",
  currency: "USD",
  intent: "capture",
  }
  const createOrder = (cartStore, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: "items",
          amount: {
            value: totalPrice,
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    postPurchase();
    console.log(data);
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
      console.log("Capture result", details, JSON.stringify(details, null, 2));
      var transaction = details.purchase_units[0].payments.captures[0];
      alert(
        "Transaction " +
          transaction.status +
          ": " +
          transaction.id +
          "\n\nSee console for all available details"
      );
      console.log(details);
      setOrderID(transaction.id);
    });
  };
  const onCancel = (data) => {
    console.log("You have cancelled the payment!", data);
  };

  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

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
            <button className="btn-checkout" onClick={() => setPayPal(!payPal)}>
            Proceed to checkout
            <BsBagCheck className="icon-checkout" />
          </button>
          {payPal && (
            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}
                onError={onError}
                onCancel={onCancel}
              />
            </PayPalScriptProvider>
          )}
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
