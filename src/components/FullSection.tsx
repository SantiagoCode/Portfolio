import React from 'react'

const FullSection = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='container mx-auto px-4 min-h-screen flex flex-col items-center justify-center'>
      {children}
    </div> 
  )
}

export default FullSection
