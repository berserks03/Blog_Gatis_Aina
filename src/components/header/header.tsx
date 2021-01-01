import React, { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Nav } from '../nav/nav';
import logo from '../../assets/blog_logo.png';
import user from '../../assets/user_icon.png';
import './header.scss';

export const Header: FC = () => {
  const [successLogIn, setSuccesslogIn] = useState(false);
  const history = useHistory();

  const logoClickHandler = () => {
    history.push('/home');
  };

  const usersArray = useSelector((state: RootState) => {
    return state.loginReducer.users;
  });

  const activeUser = usersArray.find((item) => item.online === 'loggedIn');
  const name = activeUser?.name;
  const status = activeUser?.status;

  useEffect(() => {
    if (activeUser !== undefined) {
      setSuccesslogIn(true);
    }
  }, [activeUser]);

  return (
    <header className="header">
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-12 col-sm-2 center-xs right-sm">
            <div
              className="logo"
              role="button"
              onClick={logoClickHandler}
              tabIndex={0}
              onKeyDown={logoClickHandler}
            >
              <img src={logo} alt="" width="100" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-8">
            <Nav />
          </div>
          <div className="col-xs-12 col-sm-2 center-xs">
            {successLogIn && status !== undefined ? (
              <div className="header__login">
                <img src={user} alt="user_icon" className={status === 'admin' ? 'header__user__icon admin' : 'header__user__icon user'} />
                <h4>
                  {status === 'admin' ? 'Admin' : 'User'}: {name?.toUpperCase()}
                </h4>
              </div>
            ) : (
              <div className="header__login">
                <img src={user} alt="" className="header__user__icon" />
                <h4>Guest</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
