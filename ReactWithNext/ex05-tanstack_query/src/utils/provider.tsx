"use client"
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { ReactNode } from 'react'
import { queryClient } from '../queries/queryClient'

type Props = { children: ReactNode}

export default function Provider({ children }: Props) {
  
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}