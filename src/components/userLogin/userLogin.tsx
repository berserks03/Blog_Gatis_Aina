import React, { FC, useState } from 'react';
import './userLogin.scss';
import Button from '../button/button';

export const UserLogin: FC = () => {


  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="UserLogin">
      <h1>Login Form</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="username"
          value={userName}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
            setUserName(ev.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
            setPassword(ev.target.value)}
        />
      </div>      
      <Button
        className="UserLogin__button"
        text="Login"
        // onClick={() => dispatch(SetLoginState({ 'userName': userName, 'password': password }))}
      />
    </div>
  );
};
