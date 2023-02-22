import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import { Button } from 'react-bootstrap';

const RegisterPage = () => {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />
      <p>Already Registered?</p>
      <center>
        <Button
          type='button'
          className='btn btn_asLink'
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
      </center>
    </div>
  );
}

export default RegisterPage;
