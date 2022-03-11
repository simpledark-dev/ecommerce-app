import { createSlice } from '@reduxjs/toolkit'
import { categories } from 'data/data'

const initialState = {
  categoryFilterList: categories.map(category => ({
    ...category,
    selectedValues: []
  })),
  priceRange: {
    min: 0,
    max: +Infinity
  }
}

export const productFilterSlice = createSlice({
  name: 'productFilters',
  initialState,
  reducers: {
    updateCategoryFilterList: (state, action) => {
      const { categoryId, categoryValue } = action.payload
      const categoryFilter = state.categoryFilterList.find(
        category => category.id === categoryId
      )
      if (categoryFilter.selectedValues.includes(categoryValue)) {
        categoryFilter.selectedValues = categoryFilter.selectedValues.filter(
          v => v !== categoryValue
        )
      } else categoryFilter.selectedValues.push(categoryValue)
    },
    clearAllFilter: (state, action) => {
      state.categoryFilterList.forEach(
        categoryFilter => (categoryFilter.selectedValues.length = 0)
      )
      state.priceRange = {
        min: 0,
        max: +Infinity
      }
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload
    }
  }
})

export const { updateCategoryFilterList, clearAllFilter, setPriceRange } =
  productFilterSlice.actions

export default productFilterSlice.reducer
