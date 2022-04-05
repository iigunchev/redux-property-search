import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-12 bg-sky-200">
        <h4 className="font-bold text-xl text-blue-800">How much is your home worth?</h4>
        <button type="button" className="py-2 px-4 bg-rose-500 text-white font-bold rounded-lg">Start instant valuation</button>
    </header>
  )
}

export default Header