import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserLogin } from '../components/userLogin/userLogin';
import { RootState } from '../store';
import { LoginUserType } from '../store/logInReducer/logInTypes';
import { RemoveOnlineUser } from '../store/logInReducer/logInActions';
import { UserLogOut } from '../components/userLogOut/userLogOut';

const Login: FC = () => {
  const [successLogIn, setSuccesslogIn] = useState(false);

  const usersArray = useSelector((state: RootState) => {
    return state.loginReducer.users;
  });

  const dispatch = useDispatch();

  const activeUser = usersArray.find((item) => item.online === 'loggedIn');

  useEffect(() => {
    if (activeUser !== undefined) {
      setSuccesslogIn(true);
    }
  }, [activeUser]);

  const name = activeUser?.name;
  const password = activeUser?.password;
  const status = activeUser?.status;

  const logOutClickHandler = () => {
    const newUser: LoginUserType = {
      name,
      password,
      online: 'loggedOut',
      status,
    };

    dispatch(RemoveOnlineUser(newUser));
    setSuccesslogIn(false);
  };

  return !successLogIn ? (
    <section>
      <div className="container">
        <div className="row center-xs middle-xs vh">
          <div className="col-xs-11 col-sm-6 col-md-5 col-lg-4 center-xs">
            <UserLogin />
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-11 col-sm-6 col-md-5 col-lg-4">
            <UserLogOut
              name={name}
              status={status}
              clickHandler={logOutClickHandler}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
