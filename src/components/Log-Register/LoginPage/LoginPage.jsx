import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import LoginForm from '../LoginForm/LoginForm';

const registerMessage = 'Haven\'t Registered?';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />
      <p>{registerMessage}</p>
      <center>
        <Button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
