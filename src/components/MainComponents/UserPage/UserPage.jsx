import React, { useEffect } from 'react';
import LogOutButton from '../../Log-Register/LogOutButton/LogOutButton';
import AuditionItem from '../AuditionItem/AuditionItem';
import { useSelector, useDispatch } from 'react-redux';

function UserPage() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const auditions = useSelector((store) => store.singleAuditionReducer);

  useEffect(() => {
    dispatch({
      type: 'FETCH_CLOSEST_UPCOMING_AUDITION',
    });
  }, []);

  return (
    <div className='container'>
      <h2>Hi, {user.username}!</h2>
      <p>Here is your next upcoming audition:</p>
      {auditions.map((audition) => {
        if (audition) {
          return <AuditionItem key={audition.id} audition={audition} />;
        }
      })}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
