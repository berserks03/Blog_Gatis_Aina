import React, { FC } from 'react';
import './userLogin.scss';

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
      <button type="submit" className="UserLogin__button">
        Login
      </button>
    </div>
  );
};
