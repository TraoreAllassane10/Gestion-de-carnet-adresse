import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router';


const Header = () => {
  return (
    <div className='flex justify-between p-6 border-b'>
      {/* <div>
            <a  href="/"><span>Carneto</span></a>
        </div>

        <Navbar/> */}

      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">Carneto</Link>
        </div>
        <div className="flex gap-2">
          <input type="text" placeholder="Recherche..." className="input input-bordered w-24 md:w-auto" />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Parametres</a></li>
              <li><a>Deconnexion</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header