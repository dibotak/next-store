"use client";
import { useGetProductDetailQuery } from "@/lib/features/products/productsApiSlice";

interface ProductDetailProps {
  productId: number;
}

export const ProductDetail = ({ productId }: ProductDetailProps) => {
  const { data, isError, isLoading, isSuccess } =
    useGetProductDetailQuery(productId);

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
        <h3>Detail Product</h3>
        <div className="flex flex-wrap max-w-[1000px]">
            <div className="p-2 border w-1/2">
              <img src={data.image} style={{maxWidth: '200px'}} />
              <p>{data.title}</p>
            </div>
        </div>
      </div>
    );
  }

  return null;
};
