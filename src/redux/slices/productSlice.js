import { createSlice } from '@reduxjs/toolkit'
import { products } from 'data/data'

const initialState = {
  products: products,
  productSearchList: [],
  productDisplayList: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setProductSearchList: (state, action) => {
      state.productSearchList = action.payload
    },
    setProductDisplayList: (state, action) => {
      state.productDisplayList = action.payload
    }
  }
})

export const { setProducts, setProductSearchList, setProductDisplayList } =
  productSlice.actions

export default productSlice.reducer
