import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='navbar'>

        <Link href='/' className="nav-logo-wrapper">
            <div className="nav-logo-img"></div>
            <div className="nav-logo-text">Notzzz</div>
        </Link>
        <div className="nav-links-wrapper">
            <Link className="nav-link" href='/'><div >Home</div></Link>
            <Link className="nav-link" href='/profiles'><div >Profiles</div></Link>
            <Link className="nav-link" href='/howitworks'><div >How it Works</div></Link>
            <Link className="nav-link" href='/pricing'> <div >Pricing</div></Link>
            <Link className="nav-link" href='/about'><div >About us</div></Link>
            
            
            
           
            
        </div>

        <div className="nav-button-wrapper">
            <button className="btn nav-button">Sign in</button>
        </div>

    </div>
  )
}

export default Navbar