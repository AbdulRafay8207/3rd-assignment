// src/pages/StudentDetail.tsx
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../app/store'
import { fetchStudentById, updateStudent } from '../features/student/studentSlice'

const StudentDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const studentId = id ?? '' // ✅ keep it as string

  const { students } = useSelector((state: RootState) => state.students)

  const student = students.find((s) => s.id === Number(studentId)) // ✅ compare string to string

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (students.length === 0) {
      dispatch(fetchStudentById(studentId))
    }
  }, [dispatch, students.length])


  useEffect(() => {
    if (student) {
      setName(`${student.firstName} ${student.lastName}`)
      setEmail(student.email)
    }
  }, [student])

  const handleUpdate = () => {
  const [firstName, lastName = ''] = name.split(' ') // handle single name too
  dispatch(updateStudent({ id: Number(studentId), firstName, lastName, email }))
  navigate('/')
}


  if (!student) return <p className="p-4">Student not found...</p>

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Student</h1>

      <div className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />


        <button
          onClick={handleUpdate}
          className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Update Student
        </button>
      </div>
    </div>
  )
}

export default StudentDetail
