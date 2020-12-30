import React, { FC, useState, useEffect } from 'react';
import './userLogin.scss';
import Button from '../button/button';

type UserType = {
  name: string;
  password: string;
};

export const UserLogin: FC = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLogin, setIsLogin] = useState(true);
  const [noUserName, setNoUserName] = useState(false);
  const [noUserPassword, setNoUserPassword] = useState(false);

  useEffect(() => {
    const usersStorage = localStorage.getItem('usersStorage');

    if (usersStorage) {
      setUsers(JSON.parse(usersStorage));
    }
  }, []);

  const registerClickHandler = () => {
    !userName ? setNoUserName(true) : setNoUserName(false);
    !userPassword ? setNoUserPassword(true) : setNoUserPassword(false);
    if (userName && userPassword) {
      const newUsers = [
        ...users,
        {
          name: userName,
          password: userPassword,
        },
      ];
      localStorage.setItem('usersStorage', JSON.stringify(newUsers));
      setUsers(newUsers);
      setUserName('');
      setUserPassword('');
    }
  };

  const loginClickHandler = () => {};

  return isLogin ? (
    <div className="UserLogin">
      <h1>Login Form</h1>
      <div>
        <label htmlFor="username">Username</label>
        {noUserName ? <span className="error-message">UserName ir required!</span> : ''}
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
        {noUserPassword ? <span className="error-message">Password ir required!</span> : ''}
        <input
          type="password"
          id="password"
          placeholder="password"
          value={userPassword}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
            setUserPassword(ev.target.value)}
        />
      </div>
      <div>
        <Button className="UserLogin__button" text="Login" onClick={loginClickHandler} />
        <Button
          className="UserLogin__button--register"
          text="Not registered? Click here"
          onClick={() => setIsLogin(!isLogin)}
        />
      </div>
    </div>
  ) : (
    <div className="UserLogin">
      <h1>Registration Form</h1>
      <div>
        <label htmlFor="username">Username</label>
        {noUserName ? <span className="error-message">UserName ir required!</span> : ''}
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
        {noUserPassword ? <span className="error-message">Password ir required!</span> : ''}
        <input
          type="text"
          id="password"
          placeholder="password"
          value={userPassword}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
            setUserPassword(ev.target.value)}
        />
      </div>
      <div>
        <Button className="UserLogin__button" text="Register" onClick={registerClickHandler} />
        <Button 
          className="UserLogin__button--register"
          text='Already registered? Click here'
          onClick={()=>setIsLogin(!isLogin)}
        /> 
      </div>
    </div>
  );
};
