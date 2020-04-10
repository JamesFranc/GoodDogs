import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo center">Dog-O-Rifik</Link>

                <ul className="right">
                    <li><Link to="/" ><i className="material-icons">dog</i></Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;