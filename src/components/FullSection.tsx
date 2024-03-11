import React from 'react'

const FullSection = ({
  children,
  id,
  clases
}: {
  children: React.ReactNode,
  id?: string
  clases?: string
}) => {
  return (
    <div id={id || ''} className={`z-20 container relative mx-auto px-6 mb-12 md:mb-4 min-h-screen flex flex-col items-center justify-center opacity-0 transition-all duration-500 ${clases}`} >
      {children}
    </div> 
  )
}

export default FullSection
