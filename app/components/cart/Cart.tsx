"use client";
import { removeProduct, selectProducts, selectTotal } from "@/lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function Cart() {
  const dispatch = useAppDispatch()
  const products = useAppSelector(selectProducts)
  const total = useAppSelector(selectTotal)

  return (
    <div>
      {products.length === 0 && <p>Cart is empty</p>}
      {products.map(({id, image, title, price, amount}) => (
        <div className="p-2 border" key={id + '-product'}>
          <img src={image} style={{maxWidth: '100px'}} />
          <p>{title}</p>
          <p>Price: {price}</p>
          <p>Amount: {amount}</p>
          <button
            className="bg-red-300 cursor-pointer"
            onClick={() => dispatch(removeProduct(id))}
          >Remove from Cart</button>
        </div>
      ))}
      <div>
        <p>Total: {total}</p>
      </div>
    </div>
  )
}
