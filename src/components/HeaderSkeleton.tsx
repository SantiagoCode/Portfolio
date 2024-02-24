import React from 'react'

const HeaderSkeleton = ({ 
  title
}: { 
  title: string
}) => {
  return (
    <div className='flex flex-col justify-end h-96 bg-slate-700'>
      <h1 className='text-8xl'>{title}</h1>
    </div> 
  )
}

export default HeaderSkeleton
