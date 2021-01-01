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
          <div className="col-xs-12 col-sm-2 center-xs rigt-sm">
            <div className="logo" role="button" onClick={logoClickHandler} tabIndex={0} onKeyDown={logoClickHandler}>
              <img src={logo} alt="" width="100" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-8">
            <Nav />
          </div>
          <div className="col-xs-12 col-sm-1 center-xs">
            <h4>Login</h4>
          </div>
        </div>
      </div>
    </header>
  );
};
