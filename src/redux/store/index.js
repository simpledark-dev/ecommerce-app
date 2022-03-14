import { configureStore } from '@reduxjs/toolkit'

import productSlice from '../slices/productSlice'
import productFilterSlice from '../slices/productFilterSlice'

export const store = configureStore({
  reducer: {
    product: productSlice,
    productFilters: productFilterSlice
  }
})
