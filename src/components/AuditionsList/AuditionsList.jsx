import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuditionItem from '../AuditionItem/AuditionItem';
import AuditionForm from '../AuditionForm/AuditionForm';
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
            return <AuditionItem key={audition.id} audition={audition} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default AuditionsList;