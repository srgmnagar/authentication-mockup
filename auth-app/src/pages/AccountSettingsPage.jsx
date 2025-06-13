import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function AccountSettingsPage() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser')
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser))
    }
  }, [])

  if (!currentUser) {
    return (
      <div className="flex flex-col h-screen">
        <div className="flex flex-col items-center justify-center flex-grow p-6 pt-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Account Settings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-500"
          >
            No user data found. Please login or create an account.
          </motion.p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="p-6 pt-16 text-left flex-grow">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-gray-800 mb-8"
        >
          Account Settings
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center mb-6"
        >
          <img
            src="https://via.placeholder.com/64"
            alt="User Avatar"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{currentUser.fullName}</h2>
            <p className="text-gray-600">{currentUser.email}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-500 text-sm leading-relaxed mb-8"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </motion.div>

        <div className="border-t border-gray-200 pt-8 mt-auto">
          <p className="text-gray-400 text-sm">Additional settings would go here.</p>
        </div>
      </div>
    </div>
  )
}

export default AccountSettingsPage 