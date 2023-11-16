import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import AuditionItem from '../AuditionItem/AuditionItem';

import './UserPage.css';

function UserPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const auditions = useSelector((store) => store.singleAuditionReducer);

  const { username } = user;

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
      <h2 className="user-page-h2">
        {`Hi, ${username}!`}
      </h2>
      <p>Here is your next upcoming audition:</p>
      {auditions.length ? (
        auditions.map((audition) => <AuditionItem key={audition.id} audition={audition} />)
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
