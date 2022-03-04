import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Gets user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null, // if there is a user, we'll use that, otherwise null
  isError: false,
  isSuccss: false,
  isLoading: false,
  message: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: state => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: () => {},
})

export const { reset } = authSlice.actions
export default authSlice.reducer
