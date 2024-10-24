
import React from 'react'

export default function Header() {
  return (
     <header className="flex basis-14 bg-red-500 p-2">
      <div className="basis-52 bg-gray-500"></div>
      <ul className="flex flex-auto justify-end gap-x-2 bg-teal-500">
        <li className="basis-36 bg-orange-500"></li>
        <li className="basis-36 bg-orange-500"></li>
        <li className="basis-36 bg-orange-500"></li>
      </ul>
    </header>
  )
}
