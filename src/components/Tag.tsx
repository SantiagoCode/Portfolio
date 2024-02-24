import Link from 'next/link'

const Tag = ({ children, small, bgColor, txtColor, url }: { children: React.ReactNode, small?: boolean, bgColor: string, txtColor: string, url: string }) => {
  return (
    <Link href={url} 
      className={`inline-flex items-center font-bold leading-sm uppercase rounded-full text-xs ${small ? 'px-2 py-1 my-1' : 'px-3 py-1 mb-2 mr-3'}`}
      style={{ backgroundColor: bgColor, color: txtColor }}
    >
      {children}
    </Link>
  )
}

export default Tag