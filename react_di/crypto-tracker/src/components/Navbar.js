import React from 'react'
import { Nav, NavOptions } from '../styles/NavbarElements'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <Nav>
            <Link to="/">
                <h1>Crypto Tracker</h1>
            </Link>
            <p>
                Get the latest news on crypto currencies!
            </p>
        </Nav>
    )
}

export default Navbar
