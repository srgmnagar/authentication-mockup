import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import InputField from '../components/InputField'
import RadioInput from '../components/RadioInput'

function CreateAccountPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: null,
  })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'radio' ? (checked ? value : null) : value,
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.fullName) newErrors.fullName = 'Full Name is required.'
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required.'
    if (!formData.email) {
      newErrors.email = 'Email Address is required.'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address.'
    }
    if (!formData.password) newErrors.password = 'Password is required.'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const isCreateAccountButtonDisabled = (
    !formData.fullName ||
    !formData.phoneNumber ||
    !formData.email ||
    !formData.password
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || []
      const updatedUsers = [...existingUsers, formData]
      localStorage.setItem('users', JSON.stringify(updatedUsers))
      localStorage.setItem('currentUser', JSON.stringify(formData))
      navigate('/account-settings')
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-6  text-left flex-grow">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-semibold text-gray-800 mb-2"
        >
          Create your PopX account
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 text-semibold text-sm leading-relaxed mb-3 mr-10"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <InputField
            label="Full Name*"
            type="text"
            id="fullName"
            placeholder="Enter Full Name"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <InputField
            label="Phone Number*"
            type="tel"
            id="phoneNumber"
            placeholder="Enter Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
          />
          <InputField
            label="Email Address*"
            type="email"
            id="email"
            placeholder="Enter Email Address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            label="Password*"
            type="password"
            id="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <InputField
            label="Company Name"
            type="text"
            id="companyName"
            placeholder="Enter Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <label className="block text-gray-800 text-sm font-semibold mb-2">Are you an Agency?</label>
            <div className="flex space-x-4">
              <RadioInput
                label="Yes"
                id="isAgencyYes"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
              />
              <RadioInput
                label="No"
                id="isAgencyNo"
                name="isAgency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
              />
            </div>
          </motion.div>
          <motion.button
            type="submit"
            disabled={isCreateAccountButtonDisabled}
            className={`mt-auto w-full py-3 rounded-lg font-semibold text-lg shadow-md ${isCreateAccountButtonDisabled ? 'bg-gray-300 text-white cursor-not-allowed' : 'bg-purple-600 text-white hover:bg-purple-700'}`}
            whileHover={isCreateAccountButtonDisabled ? {} : { scale: 1.02 }}
            whileTap={isCreateAccountButtonDisabled ? {} : { scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Create Account
          </motion.button>
        </motion.form>
      </div>
    </div>
  )
}

export default CreateAccountPage 