import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { UserLogin } from '../components/userLogin/userLogin';
import { RootState } from '../store';

const Login: FC = () => {

  const usersArray = useSelector((state: RootState) => {
    return state.loginReducer.users;
  });

  console.log('login page users array', usersArray);

  const activeUser = usersArray.find(item => item.online === true);
  console.log('login page active user', activeUser);

  const name = activeUser?.name;
  const status = activeUser?.status;

  console.log('active user data: ', name, status);

  
  return (
    <section>
      <div className="container">
        <div className="row center-xs middle-xs vh">
          <div className="col-xs-11 col-sm-6 col-md-5 col-lg-4 center-xs">
            <UserLogin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
