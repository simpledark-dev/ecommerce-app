import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login } from 'api/services'

export const getUser = createAsyncThunk(
  'currentUser/getUser',
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await login({ email, password })
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const initialState = {
  loading: false,
  error: null,
  currentUser: JSON.parse(localStorage.getItem('currentUser')) || null
}

export const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    removeCurrentUser: (state, action) => {
      state.currentUser = null
      state.error = null
      localStorage.removeItem('currentUser')
    }
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.loading = true
    },
    [getUser.rejected]: (state, action) => {
      state.currentUser = null
      state.loading = false
      state.error = { message: action.payload }
    },
    [getUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload
      localStorage.setItem('currentUser', JSON.stringify(action.payload))
      state.loading = false
      state.error = null
    }
  }
})

export const { setCurrentUser, removeCurrentUser } = userSlice.actions

export default userSlice.reducer
