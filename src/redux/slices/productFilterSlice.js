import { createSlice } from '@reduxjs/toolkit'
import { categories } from 'pseudoDB'
import { SORT_BY_VALUES } from 'constants'

const getSortValueFromUrl = () => {
  const sortValueFromUrl = new URLSearchParams(window.location.search).get(
    'sort'
  )
  const isValidSortValue =
    Object.values(SORT_BY_VALUES).includes(sortValueFromUrl)

  return (isValidSortValue && sortValueFromUrl) || SORT_BY_VALUES.mostPopular
}

export const filtersInitialState = {
  searchKeyword: '',
  sortValue: getSortValueFromUrl(),
  categoryFilterList: categories.map(category => ({
    ...category,
    selectedValues: []
  })),
  priceRange: {
    min: '',
    max: +Infinity
  }
}

export const productFilterSlice = createSlice({
  name: 'productFilters',
  initialState: filtersInitialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload
    },
    setSortValue: (state, action) => {
      state.sortValue = action.payload
    },
    setCategoryFilterList: (state, action) => {
      state.categoryFilterList = action.payload
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload
    },
    clearAllFilter: (state, action) => {
      state.categoryFilterList = filtersInitialState.categoryFilterList
      state.priceRange = filtersInitialState.priceRange
    }
  }
})

export const {
  setSearchKeyword,
  setSortValue,
  setCategoryFilterList,
  clearAllFilter,
  setPriceRange
} = productFilterSlice.actions

export default productFilterSlice.reducer
