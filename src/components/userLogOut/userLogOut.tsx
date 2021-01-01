import React, { FC } from 'react';
import './userLogOut.scss';
import Button from '../button/button';

type LogOutType = {
  name: string | undefined;
  status: string | undefined;
  clickHandler: () => void;
};

export const UserLogOut: FC<LogOutType> = ({ name, status, clickHandler }) => {
  return (
    <div className="UserLogOut">
      <h2>Welcome, {name?.toLocaleUpperCase()}!</h2>
      <h2>You are successfully logged in</h2>
      <h4>Your account data:</h4>
      <ol>
        <li>Name: {name}</li>
        <li>Status: {status}</li>
      </ol>
      <h4>Now you can:</h4>
      {status === 'admin' ? (
        <ol>
          <li>Post comment</li>
          <li>Edit article</li>
          <li>Delete article</li>
        </ol>
      ) : (
        <ol>
          <li>Post comment</li>
        </ol>
      )}
      <Button className="UserLogOut__button" text="Log out" onClick={clickHandler} />
    </div>
  );
};
