import React from 'react'
import List from './List'

type Props = {}

export default function ListContain({}: Props) {

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
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </ul>
  )
}