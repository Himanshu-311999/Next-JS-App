"use client";

import Link from "next/link"
import { usePathname } from 'next/navigation';
const Header = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link className={` ${pathname === "/" ? "active" : ""}`} href='/'>Github Repo Dashboard</Link>   
        </div>
        <div className='links'>
          <Link className={` ${pathname === "/about" ? "active" : ""}`} href='/about'>About</Link>
          <Link className={` ${pathname === '/about/team' ? "active" : ""}`} href='/about/team'>Our Team</Link>
          <Link className={` ${pathname === '/code/repos' ? "active" : ""}`} href='/code/repos'>Code</Link>
        </div>

      </div>
    </header>
  )
}

export default Header