import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Nav } from '../nav/nav';
import logo from '../../assets/blog_logo.png';
import './header.scss';

export const Header: FC = () => {
  const history = useHistory();

  const logoClickHandler = () => {
    history.push('/home');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-12 col-md-2">
            <div className="logo" role="button" onClick={logoClickHandler} tabIndex={0} onKeyDown={logoClickHandler}>
              <img src={logo} alt="" width="100" />
            </div>
          </div>
          <div className="col-xs-12 col-md-8">
            <Nav />
          </div>
          <div className="col-xs-12 col-md-1 col-md-offset-1">
            <h4>Login</h4>
          </div>
        </div>
      </div>
    </header>
  );
};
