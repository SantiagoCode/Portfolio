import React from 'react'
import Link from 'next/link'

const Links = ({ href, classNames, children }: { href: string, classNames: string, children: React.ReactNode }) => {
  return (
    <Link 
      href={href} 
      className={`${classNames} hover:font-black transition-all`}>
        {children}
    </Link>
  )
}

export default Links