import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import InputField from '../components/InputField'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // Determine if the button should be disabled
  const isLoginButtonDisabled = !email || !password

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    // Retrieve user data from local storage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || []
    const user = storedUsers.find(
      (u) => u.email === email && u.password === password
    )

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user)) // Store current logged-in user
      navigate('/account-settings') // Navigate to account settings page upon successful login
    } else {
      setError('Invalid email or password.')
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="p-6 pt-16 text-left flex-grow ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-semibold text-gray-800 mb-2 mr-20"
        >
          Signin to your PopX account
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 text-md font-semibold leading-relaxed mb-5 mr-8"
        >
          Lorem ipsum dolor sit amet, ipsum dolor s adipiscing elit.
        </motion.p>

        <form onSubmit={handleLogin} className="flex flex-col space-y-6">
          <InputField
            label="Email Address"
            type="email"
            id="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error ? true : false}
          />
          <InputField
            label="Password"
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error ? true : false}
          />

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <motion.button
            type="submit"
            disabled={isLoginButtonDisabled}
            className={`mt-auto w-full py-3 rounded-lg font-semibold text-lg ${isLoginButtonDisabled ? 'bg-gray-300 text-white cursor-not-allowed' : 'bg-purple-600 text-white shadow-md hover:bg-purple-700'}`}
            whileHover={isLoginButtonDisabled ? {} : { scale: 1.02 }}
            whileTap={isLoginButtonDisabled ? {} : { scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Login
          </motion.button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage 