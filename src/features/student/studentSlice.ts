import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface Student {
  id: number
  firstName: string
  lastName: string
  email: string
  phone?: string
}

interface StudentState {
  students: Student[]
  singleStudent: Student | null
  loading: boolean
  addLoading: boolean  
  error: string | null
}

const initialState: StudentState = {
  students: [],
  singleStudent: null,
  loading: false,
  addLoading: false,
  error: null,
}

// Fetch all students
export const fetchStudents = createAsyncThunk<Student[], void, { rejectValue: string }>(
  'students/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://dummyjson.com/users')
      if (!response.ok) {
        throw new Error('Failed to fetch students')
      }
      const json = await response.json()
      return json.users as Student[]
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

// Fetch one student by ID
export const fetchStudentById = createAsyncThunk<Student, string, { rejectValue: string }>(
  'students/fetchById',
  async (id: string, thunkAPI) => {
    try {
      const response = await fetch(`https://dummyjson.com/users/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch student')
      }
      const json = await response.json()
      return json as Student
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

// Update student
export const updateStudent = createAsyncThunk<Student, Student, { rejectValue: string }>(
  'students/update',
  async (student: Student, thunkAPI) => {
    try {
      const response = await fetch(`https://dummyjson.com/users/${student.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student),
      })
      if (!response.ok) {
        throw new Error('Failed to update student')
      }
      const json = await response.json()
      return json as Student
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

// Add new student
export const addNewStudent = createAsyncThunk<Student, Partial<Student>, { rejectValue: string }>(
  'students/addNew',
  async (studentData, thunkAPI) => {
    try {
      const response = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentData),
      })
      if (!response.ok) {
        throw new Error('Failed to add student')
      }
      const json = await response.json()
      return json as Student
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchStudents
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false
        state.students = action.payload
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? 'Error fetching students'
      })

      // fetchStudentById
      .addCase(fetchStudentById.pending, (state) => {
        state.loading = true
        state.singleStudent = null
        state.error = null
      })
      .addCase(fetchStudentById.fulfilled, (state, action) => {
        state.loading = false
        state.singleStudent = action.payload
      })
      .addCase(fetchStudentById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? 'Error fetching student'
      })

      // updateStudent
      .addCase(updateStudent.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        state.loading = false
        const idx = state.students.findIndex((s) => s.id === action.payload.id)
        if (idx !== -1) {
          state.students[idx] = action.payload
        }
        if (state.singleStudent?.id === action.payload.id) {
          state.singleStudent = action.payload
        }
      })
      .addCase(updateStudent.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? 'Error updating student'
      })

      // addNewStudent
      .addCase(addNewStudent.pending, (state) => {
        state.addLoading = true
        state.error = null
      })
      .addCase(addNewStudent.fulfilled, (state, action) => {
        state.addLoading = false
        state.students.push(action.payload)
      })
      .addCase(addNewStudent.rejected, (state, action) => {
        state.addLoading = false
        state.error = action.payload ?? 'Error adding student'
      })
  },
})

export default studentSlice.reducer
