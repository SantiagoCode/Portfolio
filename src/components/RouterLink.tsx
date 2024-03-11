"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { addBlur } from "@/utils/smooth";

const RouterLink = ({
  children,
  linkRef
}: {
  children: React.ReactNode,
  linkRef: string
}) => {
  const router = useRouter()

  return (
    <button type="button" onClick={() => {
      addBlur()
      setTimeout(() => router.push(linkRef, { scroll: true }), 300)
      }}>
      {children}
    </button>
  )
}

export default RouterLink