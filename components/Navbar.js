import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
        <ul>
            <li>
                <Link href='/'>
                    Home
                </Link>
            </li>
            <li>
                <Link href='/about'>
                    About
                </Link>
            </li>
            <li>
                <Link href='/contacts'>
                    Contacts
                </Link>
            </li>
            <li>
                <Link href='/proyects'>
                    Proyects
                </Link>
            </li>
        </ul>
    </div>
  )
}
