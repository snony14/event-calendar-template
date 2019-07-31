import React, {FC} from 'react'
import { Link } from 'react-router-dom'

import { styled } from 'theme'
import { navLinks } from 'config/navigationLinks'

const NavBarStyle = styled.div`
    background-color: #ff9600;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 5rem;
`

const NavBar:FC = ()=>{
    return (
    <NavBarStyle>
        {navLinks.map(navlink => <Link key={navlink.title} to={`/${navlink.url}`}>{navlink.title}</Link>)}
    </NavBarStyle>
    )
}

export default NavBar