import { configureStore } from '@reduxjs/toolkit'

import productSlice from '../slices/productSlice'
import searchSortFilterSlice from '../slices/searchSortFilterSlice'

export const store = configureStore({
  reducer: {
    product: productSlice,
    searchSortFilterSlice: searchSortFilterSlice
  }
})
