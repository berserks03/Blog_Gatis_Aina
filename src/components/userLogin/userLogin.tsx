import React, { FC } from 'react';
import './userLogin.scss';

export const UserLogin: FC = () => {
  return (
    <div className='UserLogin'>
      <h1>Login Form</h1>
      <div>User Name</div>
      <input type="text" name="" id="" />
      <div>Password</div>
      <input type="password" name="" id="" />
      <button type="submit">Login</button>
    </div>
  );
};
