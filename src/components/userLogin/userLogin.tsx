import React, { FC, useState } from 'react';
import './userLogin.scss';
import Button from '../button/button';

export const UserLogin: FC = () => {


  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  return (
    isLogin?
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
        <span>Not registered?</span>
        <Button 
          className="UserLogin__button--register"
          text='Click here'
          onClick={()=>setIsLogin(!isLogin)}
        /> 
      </div> 
      :      
      <div className="UserLogin">
        <h1>Register Form</h1>
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
            type="text"
            id="password"
            placeholder="password"
            value={password}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
              setPassword(ev.target.value)}
          />
        </div>      
        <Button
          className="UserLogin__button"
          text="Register"
          // onClick={() => dispatch(SetLoginState({ 'userName': userName, 'password': password }))}
        />
        <span>Already registered?</span> 
        <Button 
          className="UserLogin__button--register"
          text=' Click here'
          onClick={()=>setIsLogin(!isLogin)}
        />  
      </div>   
  );
};
