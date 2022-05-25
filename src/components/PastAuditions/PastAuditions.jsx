import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuditionItem from '../AuditionItem/AuditionItem';
import './PastAuditions.css';

function PastAuditions() {
  const auditions = useSelector((store) => store.auditionsReducer);

  return (
    <>
      <h2 className='past-h2'>Past Auditions</h2>
      {auditions.map((audition) => {
        if (audition.audition_complete === true) {
          return <AuditionItem key={audition.id} audition={audition} />;
        }
      })}
    </>
  );
}

export default PastAuditions;
