import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuditionItem from '../AuditionItem/AuditionItem';
import './AuditionsList.css';

function AuditionsList() {
  const dispatch = useDispatch();
  const auditions = useSelector((store) => store.auditionsReducer);

  useEffect(() => {
    dispatch({
      type: 'FETCH_AUDITIONS',
    });
  }, []);

  return (
    <>
      <div>
        <ul>
          {auditions.map((audition) => {
            if (audition.audition_complete === false) {
              return <AuditionItem key={audition.id} audition={audition} />;
            }
          })}
        </ul>
      </div>
    </>
  );
}

export default AuditionsList;
