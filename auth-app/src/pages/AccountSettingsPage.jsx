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

  const getRandomAvatar = (name) => {
    const seed = name || 'user'
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(seed)}`
  }

  if (!currentUser) {
    return (
      <div className="flex flex-col min-h-screen bg-[#f8f8f8]">
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
    <div className="flex flex-col min-h-screen bg-[#f8f8f8]">
      <div className=" text-left flex-grow">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 pt-5 text-xl font-semibold text-gray-600 bg-white mb-8"
        >
          Account Settings
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-3 flex items-center mb-6"
        >
          <img
            src={getRandomAvatar(currentUser.fullName)}
            alt="User Avatar"
            className="w-16  h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 ">{currentUser.fullName}</h2>
            <p className="text-gray-600">{currentUser.email}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-600 text-sm leading-relaxed font-medium mb-4 px-6"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </motion.div>

        <div className="border-t border-gray-200 pt-8 mt-auto">
          <p className="text-gray-400 text-sm px-6">Additional settings would go here.</p>
        </div>
      </div>
    </div>
  )
}

export default AccountSettingsPage 