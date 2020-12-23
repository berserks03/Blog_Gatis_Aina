import React, { FC } from 'react';
import { Nav } from '../nav/nav';
import './header.scss';



export const Header: FC = () => {

  return (
    <header className="header">
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-2">
            <img
              src="https://i.dlpng.com/static/png/6592098_preview.png"
              alt=""
              width="100"
            />
          </div>
          <div className="col-xs-8">
            <Nav />
          </div>
          <div className="col-xs-2">
            <h4>Login</h4>
          </div>
        </div>
      </div>
    </header>
  );
};
