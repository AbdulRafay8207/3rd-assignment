import { createBrowserRouter } from 'react-router'
import AppLayout from '../components/AppLayout'
import About from '../pages/About'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import StudentDetail from '../pages/StudentDetail'
import ProtectedRoute from '../components/ProtectedRoutes'
import StudentList from '../pages/Allstudent'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      { path: 'about', element: <About /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      {
        path: 'students',
        element: (

            <StudentList />
        ),
      },
      {
        path: 'students/:id',
        element: (
          <ProtectedRoute>
            <StudentDetail />
          </ProtectedRoute>
        ),
      },
    ],
  },
])

export default router
