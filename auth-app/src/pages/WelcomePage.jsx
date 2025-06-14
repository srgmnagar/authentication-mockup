import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function WelcomePage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-start justify-end min-h-screen p-6 text-center">
      <div className="mb-7">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-gray-800 mb-2"
        >
          Welcome to PopX
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 text-md font-semibold leading-relaxed max-w-xs mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </motion.p>
      </div>
      <div className="w-full space-y-4 mb-8">
        <motion.button
          onClick={() => navigate('/create-account')}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Create Account
        </motion.button>
        <motion.button
          onClick={() => navigate('/login')}
          className="w-full bg-purple-200 text-black py-3 rounded-lg font-semibold text-lg shadow-md"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Already Registered? Login
        </motion.button>
      </div>
    </div>
  )
}

export default WelcomePage 