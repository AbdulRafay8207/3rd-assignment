import { Link } from 'react-router'

const Signup = () => {
  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded"
          required
        />
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
          className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Sign Up
        </button>

        <p className="text-sm mt-2">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Signup
