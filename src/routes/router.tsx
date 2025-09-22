import { createBrowserRouter } from 'react-router'
import AppLayout from '../components/AppLayout'
import About from '../pages/About'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import EditStudent from '../pages/EditStudent'
import StudentList from '../pages/Allstudent'
import AddStudentPage from '../pages/AddStudentPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
            <Signup />
        ),
      },
      { path: 'about', element: <About /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      {
  path: 'students/add',
  element: (
      <AddStudentPage />
  ),
},
      
      {
        path: 'home',
        element: (

            <StudentList />
        ),
      },
      {
        path: 'students/:id',
        element: (
            <EditStudent />
        ),
      },
    ],
  },
])

export default router
