import Link from "next/link";
import Cart from "../components/cart/Cart";

export default function Page() {
  return (
    <div>
      <h1>Cart Page</h1>
      <Cart />
      <div>
        <Link className="bg-green-300 p-2 block" href="/checkout">Checkout</Link>
      </div>
    </div>
  )
}