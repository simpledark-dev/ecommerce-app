import { SORT_BY_VALUES } from 'constants'
import { checkIfValidSortValue } from './productSortUtils'

export const insertUrlParam = (key, value) => {
  let searchParams = new URLSearchParams(window.location.search)
  searchParams.set(key, value)
  let newurl =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname +
    '?' +
    searchParams.toString()
  window.history.pushState({ path: newurl }, '', newurl)
}

export const removeUrlParameter = paramKey => {
  const url = window.location.href
  var r = new URL(url)
  r.searchParams.delete(paramKey)
  const newUrl = r.href
  window.history.pushState({ path: newUrl }, '', newUrl)
}

export const getParamValueFromUrl = key => {
  return new URLSearchParams(window.location.search).get(key)
}

export const handleUserInputQueryParams = (
  sortValue,
  keyword,
  minPrice,
  maxPrice
) => {
  // Correct sort query param if input wrong sort values
  if (!checkIfValidSortValue(sortValue))
    insertUrlParam('sort', SORT_BY_VALUES.MOST_POPUPLAR)

  // Remove keyword query param if it's empty
  if (!keyword) removeUrlParameter('keyword')

  // Remove minPrice and maxPrice query params if values are non-numbers
  if (isNaN(minPrice)) removeUrlParameter('minPrice')
  if (isNaN(maxPrice)) removeUrlParameter('maxPrice')
}
