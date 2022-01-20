import "../styles/cart2.css"
import BasicTable from "../components/BasicTable"

export default function Cart () {
    return(
        <div className="bg-cart-all">
          <h1 className="title-cart">Shopping cart</h1>
          <BasicTable/>
        </div>
    )
}