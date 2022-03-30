import { configureStore } from '@reduxjs/toolkit'

import userSlice from '../slices/userSlice'
import productSlice from '../slices/productSlice'
import searchSortFilterSlice from '../slices/searchSortFilterSlice'

export const store = configureStore({
  reducer: {
    currentUser: userSlice,
    product: productSlice,
    searchSortFilterSlice: searchSortFilterSlice
  }
})
