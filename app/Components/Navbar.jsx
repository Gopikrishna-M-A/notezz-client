import React from 'react'
import Link from 'next/link';
import { Button } from 'antd';

import { options } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next';

const Navbar = async() => {
  const session = await getServerSession(options)
  return (
    <div className='navbar'>

        <Link href='/' className="nav-logo-wrapper">
            {/* <div className="nav-logo-img"></div> */}
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
            {session ? <Link href='/api/auth/signout'><Button className="nav-button">Sign out</Button></Link> : <Link href='/api/auth/signin'><Button className="nav-button">Sign in</Button></Link>}
            <Link href='/settings'>{session && <img src={session.user.image} className="nav-logo-img"></img>}</Link>
        </div>

    </div>
  )
}

export default Navbar