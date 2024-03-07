import React from 'react'
import SignupQuote from '../components/SignupQuote'
import SignupContent from '../components/SignupContent'

const Signup = () => {
  return (
    <div className='flex'>
      <div className='flex-1 w-50 h-screen'>
      <SignupContent></SignupContent>
      </div>
      <div className='flex-1 w-50'>
      <SignupQuote></SignupQuote>
      </div>
    </div>
  )
}

export default Signup
