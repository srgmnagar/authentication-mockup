import React from 'react'

function InputField({
  label,
  type = 'text',
  id,
  placeholder,
  value,
  onChange,
  error,
}) {
  const inputClasses = `
    w-full
    border-2 ${error ? 'border-red-500' : 'border-gray-300'}
    rounded-lg
    shadow-sm
    focus:border-purple-600
    outline-none
    text-gray-700
    bg-[#fcfcfc]
    px-5 py-3 pt-5 text-sm
  `

  const labelClasses = `
    absolute
    left-3
    -top-2
    text-sm
    px-2 pr-2
    bg-[#fcfcfc]
    z-10
    font-semibold
    text-[#6c25ff]
  `

  return (
    <div className="relative mt-4">
      <label
        htmlFor={id}
        className={`${labelClasses} ${error ? 'text-red-500' : ''}`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputClasses}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}

export default InputField 