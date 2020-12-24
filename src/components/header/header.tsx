import React, { FC } from 'react';
import { Nav } from '../nav/nav';
import logo from '../../assets/blog_logo.png';
import './header.scss';



export const Header: FC = () => {

  return (
    <header className="header">
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-2">
            <img
              src={logo}
              alt=""
              width="100"
            />
          </div>
          <div className="col-xs-8">
            <Nav />
          </div>
          <div className="col-xs-1 col-xs-offset-1">
            <h4>Login</h4>
          </div>
        </div>
      </div>
    </header>
  );
};
