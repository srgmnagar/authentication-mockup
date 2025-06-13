import React from 'react'
import { motion } from 'framer-motion'

function RadioInput({
  label,
  id,
  name,
  value,
  checked,
  onChange,
  className,
}) {
  return (
    <motion.label
      className="inline-flex items-center cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={`form-radio text-purple-600 h-4 w-4 ${className || ''}`}
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </motion.label>
  )
}

export default RadioInput 