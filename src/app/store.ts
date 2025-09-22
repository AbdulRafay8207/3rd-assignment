import { configureStore } from '@reduxjs/toolkit'
import studentReducer from '../features/student/studentSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    students: studentReducer,
    auth: authReducer, 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
