import React from "react";

import {NavLink} from "react-router-dom";
import './NavLinks.css';

const NavLinks = (props: any) => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/">ALL USERS</NavLink>
            </li>
            <li>
                <NavLink to="/places">ALL PLACES</NavLink>
            </li>
            <li>
                <NavLink to="/place/new">ADD PLACE</NavLink>
            </li>
            <li>
                <NavLink to="/user/auth">AUTHENTICATE</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks
