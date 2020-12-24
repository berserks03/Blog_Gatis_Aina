import React, { FC } from 'react';
import { UserLogin } from '../components/userLogin/userLogin';

const Login: FC = () => {

  return (
    <section>
      <div className="container">        
        <div className="row center-xs">
          <div className="col-xs-3 start-xs">
            <UserLogin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
