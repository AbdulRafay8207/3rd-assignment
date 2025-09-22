import { Link } from 'react-router'

const Login = () => {
  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Login</h2>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Login
        </button>

        <p className="text-sm mt-2">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 underline">
            Sign up here
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
