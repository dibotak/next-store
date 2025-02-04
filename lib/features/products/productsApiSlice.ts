import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const productsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  reducerPath: 'productsApi',
  tagTypes: ['Products'],
  endpoints: (build) => ({
    getProducts: build.query<Product[], number>({
      query: (limit = 10) => '/products?limit=' + limit,
      providesTags: (result, error, id) => [{ type: 'Products', id }]
    }),
    getProductDetail: build.query<Product, number>({
      query: (id) => `/products/${id}`,
      providesTags: (result, error, id) => [{ type: 'Products', id }]
    })
  })
})

export const { useGetProductsQuery, useGetProductDetailQuery } = productsApiSlice
