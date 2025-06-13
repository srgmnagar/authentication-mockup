import React from 'react'

function Header({ title }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      <h1 className="text-xl font-bold text-gray-800 flex-grow text-center">{title}</h1>
    </div>
  )
}

export default Header 