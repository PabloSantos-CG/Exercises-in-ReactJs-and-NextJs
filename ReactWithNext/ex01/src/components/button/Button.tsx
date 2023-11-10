import React from 'react'

type Props = {
  className?:string
  content:string
}

export default function Button({ className, content }: Props) {
  return (
    <button 
      className={`${className} border-2 border-solid p-2
      bg-zinc-950 text-white
      rounded
      text-xs
      hover:bg-transparent hover:text-black
      duration-500
      `}
    >
      {content}
    </button>
  )
}