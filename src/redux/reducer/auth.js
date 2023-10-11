import { createSlice } from '@reduxjs/toolkit'
import { doNotExits } from '@utils'

const initialState = {
  accessToken: "",
  remember: true,
  email: "",
  password: ""
}

// Create Redux state slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.accessToken = action.payload.token
      state.email = doNotExits(action.payload.email) ? state.email : action.payload.email
      state.password = doNotExits(action.payload.password) ? state.password : action.payload.password
    },
    removeToken: (state) => {
      state.accessToken = ""
      state.email = ""
      state.password = ""
    },
  },
})

export const { updateToken, removeToken } = authSlice.actions
export default authReducer = authSlice.reducer