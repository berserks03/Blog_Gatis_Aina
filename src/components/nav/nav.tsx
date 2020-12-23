import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

export const Nav: FC = () => {
  return (
    <nav className="nav">
      <NavLink exact to="/" className="nav" activeClassName="selected">
        Home
      </NavLink>
      <NavLink to="/login" className="nav" activeClassName="selected">
        Login
      </NavLink>
    </nav>
  );
};
