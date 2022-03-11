import { createSlice } from '@reduxjs/toolkit'
import { getSortValueFromUrl } from 'utils/productSortUtils'

const initialState = {
  sortValue: getSortValueFromUrl()
}

export const productSortSlice = createSlice({
  name: 'productSort',
  initialState,
  reducers: {
    setSortValue: (state, action) => {
      state.sortValue = action.payload
    }
  }
})

export const { setSortValue } = productSortSlice.actions

export default productSortSlice.reducer
