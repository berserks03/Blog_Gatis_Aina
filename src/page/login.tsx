import React, { FC } from 'react';
import { UserLogin } from '../components/userLogin/userLogin';

const Login: FC = () => {
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
