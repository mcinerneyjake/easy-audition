import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import AuditionsList from '../AuditionsList/AuditionsList';
import { useSelector, useDispatch } from 'react-redux';

function UserPage() {
  const user = useSelector((store) => store.user);
  return (
    <div className='container'>
      <h2>Hi, {user.username}!</h2>
      <p>Here are some of your upcoming auditions:</p>
      <AuditionsList />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
