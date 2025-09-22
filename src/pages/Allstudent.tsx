import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import type { AppDispatch, RootState } from '../app/store'
import { fetchStudents, deleteStudent } from '../features/student/studentSlice'
import Button from '../components/Button'

const StudentList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { students, loading, error } = useSelector((state: RootState) => state.students)

  useEffect(() => {
    if (students.length === 0) {
      dispatch(fetchStudents())
    }
  }, [dispatch, students.length])

  if (loading) return <p className="p-4">Loading students...</p>
  if (error) return <p className="p-4 text-red-600">Error: {error}</p>

  if (students.length === 0) return <p className="p-4">No students found.</p>

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Students</h1>
      <ul className="space-y-2">
        {students.map(student => (
          <li
            key={student.id}
            className="border p-4 rounded hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <Link to={`/students/${student.id}`} className="block flex-1">
                <p className="font-semibold text-lg">
                  {student.firstName} {student.lastName}
                </p>
                <p className="text-gray-600">{student.email}</p>
              </Link>
              <div className="flex gap-2 ml-4">
                <Button variant="outline" onClick={() => window.location.href = `/students/${student.id}`}>Edit</Button>
                <Button variant="secondary" onClick={() => dispatch(deleteStudent(student.id))}>Delete</Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StudentList
