import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { UserLogin } from '../components/userLogin/userLogin';
import { RootState } from '../store';

const Login: FC = () => {

  const usersOnline = useSelector((state: RootState) => {
    return state.loginReducer.users;
  });

  console.log('login page', usersOnline);

  // const userOnline = usersOnline.find((item) => item.online === true);

  return (
    <section>
      <div className="container">
        <div className="row center-xs middle-xs vh">
          <div className="col-xs-8 col-sm-6 col-md-4 col-lg-3 center-xs">
            <UserLogin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
