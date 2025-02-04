"use client";
import { addProduct } from "@/lib/features/cart/cartSlice";
import { useGetProductsQuery } from "@/lib/features/products/productsApiSlice";
import { useAppDispatch } from "@/lib/hooks";
import Link from "next/link";
import { useState } from "react";

const options = [5, 10, 20, 30];

export const Products = () => {
  const dispatch = useAppDispatch()
  const [numberOfProducts, setNumberOfProducts] = useState(10);
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } =
    useGetProductsQuery(numberOfProducts);

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="">
        <h3>Select the Quantity of Products to Fetch:</h3>
        <select
          className=""
          value={numberOfProducts}
          onChange={(e) => {
            setNumberOfProducts(Number(e.target.value));
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="flex flex-wrap max-w-[1000px]">
          {data.map((product) => (
            <div className="p-2 border w-1/4" key={product.id + '-product'}>
              <img src={product.image} style={{maxWidth: '200px'}} />
              <p>{product.title}</p>
              <div className="flex">
                <Link href={`/products/${product.id}`} className="block border-b border-transparent hover:border-black w-1/2">Detail</Link>
                <button onClick={() => dispatch(addProduct({...product, amount: 0}))} className="bg-blue-300 w-1/2 cursor-pointer">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};
