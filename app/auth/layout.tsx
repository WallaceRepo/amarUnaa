import React from 'react'

const AuthLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className='h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from bg-purple-100 to-green-200'>
      layout
      {children}
    </div>
  )
}

export default AuthLayout
