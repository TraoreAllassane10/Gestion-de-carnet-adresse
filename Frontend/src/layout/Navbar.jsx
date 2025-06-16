import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex place-items-center gap-6'>
        <a href="">Produits</a>
        <a href="">Solutions</a>
        <a href="">Ressources</a>
        <a href="">Pricing</a>
        <button className="btn btn-primary">Commencer</button>
    </nav>
  )
}

export default Navbar