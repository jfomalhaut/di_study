import React from 'react'
import { Nav, NavOptions } from './NavbarElements'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <Nav>
            <Link to="/">
                <h1>Crypto Tracker</h1>
            </Link>
            <NavOptions>
                <Link to="/">
                    <p>My Cryptos</p>
                </Link>

            </NavOptions>


        </Nav>
    )
}

export default Navbar
