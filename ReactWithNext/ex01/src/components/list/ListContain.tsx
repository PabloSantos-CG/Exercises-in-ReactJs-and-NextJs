import React, { ReactNode } from 'react'

type props = {
  children:ReactNode
}

export default function ListContain({ children }:props) {
  return (
    <ul
      className="
      h-96
      border-2 border-solid border-black
      rounded
      p-2
      overflow-auto
      "
    >
      {children}
    </ul>
  )
}