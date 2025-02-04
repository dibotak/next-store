import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../products/productsApiSlice'

interface ProductCart extends Product {
  amount: number
}

export interface CartSliceState {
  products: ProductCart[]
  total: number
}

const initialState: CartSliceState = {
  products: [],
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: (create) => ({
    addProduct: create.reducer((state, action: PayloadAction<ProductCart>) => {
      state.total += action.payload.price
      const checkIndex = state.products.findIndex((product) => product.id === action.payload.id)
      if (checkIndex < 0) {
        state.products.push(action.payload)
        state.products[state.products.length - 1].amount = 1
      } else {
        state.products[checkIndex].amount++
      }
      alert('item added to cart')
    }),
    removeProduct: create.reducer((state, action: PayloadAction<number>) => {
      const checkIndex = state.products.findIndex((product) => product.id === action.payload)
      if (state.products[checkIndex].amount === 1) {
        state.products = state.products.filter((product) => product.id !== action.payload)
      } else {
        state.products[checkIndex].amount--
      }
      
      state.total = state.products.reduce((accummulator, product) => (product.price * product.amount) + accummulator, 0)
    }),
    order: create.reducer((state, action: PayloadAction<{ name: string, address: string, city: string, zip: string }>) => {
      localStorage.setItem('orderedProduct', JSON.stringify({...state, ...action}))
    })
  }),
  selectors: {
    selectProducts: (state) => state.products,
    selectTotal: (state) => state.total,
  },
})

export const { addProduct, removeProduct, order } = cartSlice.actions
export const { selectProducts, selectTotal } = cartSlice.selectors
