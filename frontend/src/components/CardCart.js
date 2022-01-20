import * as React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBagCheck } from "react-icons/bs";
import { useSelector } from "react-redux";
import CartRow from "./CartRow";
import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function CardCart({ game }) {
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
  };
  console.log(cartStore);

  const createOrder = (cartStore, actions) => {
    //Creo la orden de con los datos, esta puede ser general o con detalle de items

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
    //recibo el resultado de mi operacion
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
    <div className="bg-conteiner-cart">
      <div className="conteiner-all-cart">
        <div className="card-all-cart">
          <Table bordered className="table-cart">
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
              {cartStore.map((game) => (
                <CartRow game={game} />
              ))}
            </tbody>
          </Table>
        </div>
        <div className="cart-second">
          <h2 className="title-cart-buy">Your resume</h2>
          <p className="cart-subtotal">Subtotal: </p>
          {cartStore.map((game) => (
            <p>
              {game.name}, amount: {game.amount}, $ {game.price * game.amount}
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
      <Button className="btn-back-shop" as={Link} to="/games">
        Continue shopping
      </Button>
    </div>
  );
}
