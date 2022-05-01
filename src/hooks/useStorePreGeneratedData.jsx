import { useEffect } from 'react'
import { users, carts } from 'api/mockDB'

const storePreGeneratedData = () => {
  const existingUsers = localStorage.getItem('users')
  if (!existingUsers) {
    localStorage.setItem('users', JSON.stringify(users))
  }

  const existingCarts = localStorage.getItem('carts')
  if (!existingCarts) {
    localStorage.setItem('carts', JSON.stringify(carts))
  }
}

export const useStorePreGeneratedData = () => {
  useEffect(() => {
    storePreGeneratedData()
  }, [])
}
