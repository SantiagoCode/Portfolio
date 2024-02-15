import React from 'react'

const FullSection = ({
  children,
  clases
}: {
  children: React.ReactNode,
  clases?: string
}) => {
  return (
    <div className={`container mx-auto px-4 min-h-screen flex flex-col items-center justify-center ${clases}`}>
      {children}
    </div> 
  )
}

export default FullSection
