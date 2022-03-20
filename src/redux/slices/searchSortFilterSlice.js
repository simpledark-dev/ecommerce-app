import { createSlice } from '@reduxjs/toolkit'
import { categories } from 'pseudoDB'
import { SORT_BY_VALUES } from 'constants'
import {
  getParamValueFromUrl,
  handleUserInputQueryParams,
  insertUrlParam,
  removeUrlParameter
} from 'utils/queryParamsUtils'
import { checkIfValidSortValue } from 'utils/productSortUtils'

// Get sort param value
const sortValueFromUrl = getParamValueFromUrl('sort')

// Get search param value
const searchKeywordValueFromUrl = getParamValueFromUrl('keyword')

// Get price range param values
const minPrice = getParamValueFromUrl('minPrice')
const maxPrice = getParamValueFromUrl('maxPrice')

handleUserInputQueryParams(
  sortValueFromUrl,
  searchKeywordValueFromUrl,
  minPrice,
  maxPrice
)

export const filtersInitialState = {
  searchKeyword: searchKeywordValueFromUrl || '',
  sortValue: checkIfValidSortValue(sortValueFromUrl)
    ? sortValueFromUrl
    : SORT_BY_VALUES.MOST_POPULAR,
  categoryFilterList: categories.map(category => ({
    ...category,
    selectedValues: []
  })),
  priceRange: {
    min: minPrice && !isNaN(minPrice) ? minPrice : '',
    max: maxPrice && isNaN(maxPrice) ? maxPrice : +Infinity
  }
}

export const searchSortFilterSlice = createSlice({
  name: 'searchSortFilterSlice',
  initialState: filtersInitialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload
      action.payload
        ? insertUrlParam('keyword', action.payload)
        : removeUrlParameter('keyword')
    },
    setSortValue: (state, action) => {
      state.sortValue = action.payload
      insertUrlParam('sort', action.payload)
    },
    setCategoryFilterList: (state, action) => {
      state.categoryFilterList = action.payload
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload

      const { min, max } = action.payload
      if (min) insertUrlParam('minPrice', min)
      if (max && max !== +Infinity) insertUrlParam('maxPrice', max)
    },
    clearFilters: (state, action) => {
      state.categoryFilterList = filtersInitialState.categoryFilterList
      state.priceRange = filtersInitialState.priceRange
      removeUrlParameter('minPrice')
      removeUrlParameter('maxPrice')
    }
  }
})

export const {
  setSearchKeyword,
  setSortValue,
  setCategoryFilterList,
  clearFilters,
  setPriceRange
} = searchSortFilterSlice.actions

export default searchSortFilterSlice.reducer
