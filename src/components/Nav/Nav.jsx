import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Jerry Snyder Memorial Fund</h2>
      </Link>
      <div>
        <div className="link-container">
        <Link className="navLink" to="/home">
          Home
        </Link>
        <Link className="navLink" to="/about">
          About
        </Link>
        <Link className="navLink" to="/donate">
          Donate
        </Link>
        <Link className="navLink" to="/apply">
          Apply
        </Link>
        <Link className="navLink" to="/contact">
          Contact Us
        </Link>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          
          <Link className="navLink" to="/login">
            Admin
          </Link>
        )}
        
        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink2" to="/user">
              Dashboard
            </Link>

            <Link className="navLink2" to="/admin">
              View Applications
            </Link>

            <LogOutButton className="navLink2" />
          </>
        )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
