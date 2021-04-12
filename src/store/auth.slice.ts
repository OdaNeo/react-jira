import { createSlice } from '@reduxjs/toolkit'
import { User } from 'screen/project-list/search-panel'
import * as auth from 'auth-provider'

interface State {
  user: User | null
}

const initialState: State = {
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    }
  }
})

const { setUser } = authSlice.actions
