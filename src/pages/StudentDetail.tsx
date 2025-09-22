import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../app/store'
import { fetchStudentById, updateStudent } from '../features/student/studentSlice'

const StudentDetail = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const { singleStudent, loading, error } = useSelector(
    (state: RootState) => state.students
  )

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (id) {
      dispatch(fetchStudentById(id))
    }
  }, [id, dispatch])

  useEffect(() => {
    if (singleStudent) {
      setName(`${singleStudent.firstName} ${singleStudent.lastName}`)
      setEmail(singleStudent.email)
    }
  }, [singleStudent])

  const handleUpdate = () => {
    const [firstName, lastName = ''] = name.split(' ')
    if (!id) return

    dispatch(
      updateStudent({
        id: Number(id),
        firstName,
        lastName,
        email,
      })
    )
    navigate('/')
  }

  if (loading) {
    return <p className="p-4 text-center">Loading student details...</p>
  }

  if (error) {
    return <p className="p-4 text-center text-red-600">{error}</p>
  }

  if (!singleStudent) {
    return <p className="p-4 text-center">Student not found.</p>
  }

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
          type="email"
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
