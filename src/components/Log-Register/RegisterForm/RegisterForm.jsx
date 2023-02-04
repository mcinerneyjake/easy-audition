import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  };

  return (
    <form className='formPanel' onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className='alert' role='alert'>
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor='username'>
          Username:
          <input
            type='text'
            name='username'
            className='login-input'
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor='password'>
          Password:
          <input
            type='password'
            name='password'
            className='login-input'
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <Button className='btn mt-2' type='submit' name='submit' value='Register'>
          Register
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;
