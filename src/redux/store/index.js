import { configureStore } from '@reduxjs/toolkit'

import productSlice from '../slices/productSlice'
import productFilterSlice from '../slices/productFilterSlice'
import productSortSlice from '../slices/productSortSlice'

export const store = configureStore({
  reducer: {
    product: productSlice,
    productFilters: productFilterSlice,
    productSort: productSortSlice
  }
})
