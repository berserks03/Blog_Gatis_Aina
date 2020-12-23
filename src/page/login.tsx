import React, { FC } from 'react';
import { UserLogin } from '../components/userLogin/userLogin';

const Login: FC = () => {

  return (
    <section>
      <div className="container">
        <div className="row center-xs margin-bottom--24">
          <div className="col-xs-12">
            <h1>This is login page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 xs-middle">
            <UserLogin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
