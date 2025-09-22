// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit'
import studentReducer from '../features/student/studentSlice'
import authReducer from '../features/auth/authSlice' // ⬅️ Import it!

export const store = configureStore({
  reducer: {
    students: studentReducer,
    auth: authReducer, // ⬅️ Add this line!
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
