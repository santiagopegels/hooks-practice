import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">useContext</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <li className="nav-item">
                <NavLink exact to='/' activeClassName="active" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink exact to='/login' activeClassName="active" className="nav-link">Login</NavLink>
              </li>
              <li className="nav-item">
              <NavLink exact to='/about' activeClassName="active" className="nav-link">About</NavLink>
              </li>
            </div>
          </div>
        </div>
      </nav>
    )
}
