import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuditionItem from '../AuditionItem/AuditionItem';
import './UpcomingAuditions.css';

function UpcomingAuditions() {
  const dispatch = useDispatch();
  const auditions = useSelector((store) => store.auditionsReducer);

  useEffect(() => {
    dispatch({
      type: 'FETCH_AUDITIONS',
    });
  }, []);

  return (
    <>
      <h2 className='upcoming-h2'>Upcoming Auditions</h2>
      {auditions.map((audition) => {
        if (audition.audition_complete === false) {
          return <AuditionItem key={audition.id} audition={audition} />;
        }
      })}
    </>
  );
}

export default UpcomingAuditions;
