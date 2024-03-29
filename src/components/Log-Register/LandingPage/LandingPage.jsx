import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './LandingPage.css';

// CUSTOM COMPONENTS
import AboutPage from '../../MainComponents/AboutPage/AboutPage';

function LandingPage() {
  const history = useHistory();

  const onLogin = () => {
    history.push('/login');
  };

  const onRegister = () => {
    history.push('/registration');
  };

  return (
    <div>
      <AboutPage />
      <center>
        <h4>Already a Member?</h4>
        <Button className="btn m-2" onClick={onLogin}>
          Login
        </Button>
        <h4 className="m-2">Need to Register?</h4>
        <Button className="btn m-2" onClick={onRegister}>
          Register
        </Button>
      </center>
    </div>
  );
}

export default LandingPage;
