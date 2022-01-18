import "../styles/cart.css"
import CardCart from "../components/CardCart"

export default function Cart () {
    return(
        <div className="bg-cart-all">
          <h1 className="title-cart">Shopping cart</h1>
          <CardCart/>
        </div>
    )
}