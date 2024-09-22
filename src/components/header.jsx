import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md p-4'> 
    
        <div className="flex items-center justify-between max-w-6xl max-auto p-3">
            <Link to="/">
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className="text-slate-500">Booking</span>
                </h1>
            </Link>

            <form className='bg-slate-100 p-1 rounded flex items-center' action="form">
                <input className='bg-transparent  focus:outline-none w-24 sm:w-64 ' type="text" placeholder='Search' />
                <FaSearch className="text-slate-500" />
            </form>

            <ul className='flex gap-4'>
                <Link to="/">
                    <li className='text-slate-500 '><a href="/home">Home</a></li>
                </Link>
                <Link to="/about">
                    <li className='text-slate-500 '><a href="/about">About</a></li>
                </Link>
                <Link to="/sign-in">
                    <li className='text-slate-500 '><a href="/sign-in">Sign In</a></li>
                </Link>

            </ul>
        </div>

    </header>
  )
}
