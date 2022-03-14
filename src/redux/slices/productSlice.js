import { createSlice } from '@reduxjs/toolkit'
import { products } from 'pseudoDB'

const initialState = { products }

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    }
  }
})

export const { setProducts } = productSlice.actions

export default productSlice.reducer
