import React, { FC } from 'react';
import './userLogin.scss';
import Button from '../button/button';

export const UserLogin: FC = () => {
  return (
    <div className="UserLogin">
      <h1>Login Form</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="password" />
      </div>      
      <Button className="UserLogin__button" text="Login" />
    </div>
  );
};
