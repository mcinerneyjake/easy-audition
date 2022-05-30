import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import AboutPage from '../../MainComponents/AboutPage/AboutPage';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  const onRegister = (event) => {
    history.push('/registration');
  };

  return (
    <div className='container'>
      <AboutPage />
      <center>
        <h4>Already a Member?</h4>
        <Button className='btn btn_sizeSm m-2' onClick={onLogin}>
          Login
        </Button>
        <h4 className='m-2'>Need to Register?</h4>
        <Button className='btn btn_sizeSm m-2' onClick={onRegister}>
          Register
        </Button>
      </center>
    </div>
  );
}

export default LandingPage;
