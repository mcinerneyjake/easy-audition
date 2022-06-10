import React, { useEffect } from 'react';
import LogOutButton from '../../Log-Register/LogOutButton/LogOutButton';
import AuditionItem from '../AuditionItem/AuditionItem';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './UserPage.css';
import { Button } from 'react-bootstrap';

function UserPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const auditions = useSelector((store) => store.singleAuditionReducer);

  console.log('auditions, singleAuditionReducer:', auditions);

  useEffect(() => {
    dispatch({
      type: 'FETCH_CLOSEST_UPCOMING_AUDITION',
    });
  }, []);

  const goToAddAudition = () => {
    history.push('/form');
  };

  return (
    <div>
      <h2 className='user-page-h2'>Hi, {user.username}!</h2>
      <p>Here is your next upcoming audition:</p>
      {auditions.length ? (
        auditions.map((audition) => {
          return <AuditionItem key={audition.id} audition={audition} />;
        })
      ) : (
        <>
          <h3>Oops, there are no auditions here yet!</h3>
          <Button onClick={goToAddAudition}>Add a New Audition</Button>
        </>
      )}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
